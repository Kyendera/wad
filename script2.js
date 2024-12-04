const jsonUrl = 'https://raw.githubusercontent.com/Kyendera/JSON/refs/heads/main/index.json';

fetch(jsonUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        visualizeData(data);
        visualizeDataDistrict(data);
        visualizeDatatrends(data);
        visualizeDatapopularity(data);


    })
    .catch(error => console.error('Error fetching data:', error));

function visualizeData(data) {
    const allStudents = data.admissionData.pages.flatMap(page => page.students);


    const genderCounts = allStudents.reduce((counts, student) => {
        counts[student.gender] = (counts[student.gender] || 0) + 1;
        return counts;
    }, {});

    const genders = Object.keys(genderCounts);
    const counts = Object.values(genderCounts);


    const ctx = document.getElementById('admissionChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: genders,
            datasets: [{
                label: 'Gender Distribution',
                data: counts,
                backgroundColor: ['#4CAF50', '#FF5722', '#2196F3', '#FFC107', '#9C27B0'],
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                }
            }
        }
    });
}


function visualizeDataDistrict(data) {

    const allStudents = data.admissionData.pages.flatMap(page => page.students);


    const districtCounts = allStudents.reduce((counts, student) => {
        counts[student.districtName] = (counts[student.districtName] || 0) + 1;
        return counts;
    }, {});

    const districtName = Object.keys(districtCounts);
    const counts = Object.values(districtCounts);


    const ctx = document.getElementById('districtchart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: districtName,
            datasets: [{
                label: 'Students Per District',
                data: counts,
                backgroundColor: ['#4CAF50', '#FF5722', '#2196F3', '#FFC107', '#9C27B0'],
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                }
            }
        }
    });
}


function visualizeDatatrends(data) {

    const allStudents = data.admissionData.pages.flatMap(page => page.students);


    const trendCounts = allStudents.reduce((counts, student) => {
        counts[student.year] = (counts[student.year] || 0) + 1;
        return counts;
    }, {});

    const year = Object.keys(trendCounts);
    const counts = Object.values(trendCounts);


    const ctx = document.getElementById('trends').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: year,
            datasets: [{
                label: 'Admission Trends Over Years',
                data: counts,
                backgroundColor: ['#4CAF50', '#FF5722', '#2196F3', '#FFC107', '#9C27B0'],
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                }
            }
        }
    });
}


function visualizeDatapopularity(data) {

    const allStudents = data.admissionData.pages.flatMap(page => page.students);


    const popularityCounts = allStudents.reduce((counts, student) => {
        counts[student.course] = (counts[student.course] || 0) + 1;
        return counts;
    }, {});

    const course = Object.keys(popularityCounts);
    const counts = Object.values(popularityCounts);


    const ctx = document.getElementById('popularity').getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: course,
            datasets: [{
                label: 'Popular Course Over The Years',
                data: counts,
                backgroundColor: ['#4CAF50', '#FF5722', '#2196F3', '#FFC107', '#9C27B0'],
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                }
            }
        }
    });
}



