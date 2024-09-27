// const ctx = document.getElementById('myChart').getContext('2d');

// const data = {
//     labels: [
//         'Technical Skills',
//         'Non-Technical Skills',
//         'Projects',
//         'Assignments',
//         'Attendance',
//     ],
//     datasets: [{
//         label: 'Dataset 1',
//         data: [95, 20, 60, 80, 90],
//         fill: true,
//         backgroundColor: 'rgba(23, 99, 132, 0.2)', // Updated for proper RGBA
//         borderColor: 'rgb(255, 99, 132)',
//         pointBackgroundColor: 'rgb(255, 99, 132)',
//         pointBorderColor: '#fff',
//         pointHoverBackgroundColor: '#fff',
//         pointHoverBorderColor: 'rgb(255, 99, 132)',
//     }, {
//         label: 'Dataset 2',
//         data: [30, 90, 40, 100, 96],
//         fill: true,
//         backgroundColor: 'rgba(54, 162, 235, 0.2)', // Updated for proper RGBA
//         borderColor: 'rgb(54, 162, 235)',
//         pointBackgroundColor: 'rgb(54, 162, 235)',
//         pointBorderColor: '#fff',
//         pointHoverBackgroundColor: '#fff',
//         pointHoverBorderColor: 'rgb(54, 162, 235)',
//     }]
// };

// const config = {
//     type: 'radar',
//     data: data,
//     options: {
//         elements: { // Fixed 'element' to 'elements'
//             line: {
//                 borderWidth: 3 // Corrected to 'borderWidth'
//             }
//         }
//     },
// };

// const myChart = new Chart(ctx, config);

const data = {
    labels: [
      'Eating',
      'Drinking',
      'Sleeping',
      'Designing',
      'Coding',
      'Cycling',
      'Running'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [65, 59, 90, 81, 56, 55, 40],
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
    }, {
        label: 'My Second Dataset',
        data: [28, 48, 40, 19, 96, 27, 100],
        fill: true,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        pointBackgroundColor: 'rgb(54, 162, 235)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(54, 162, 235)'
  }]
};