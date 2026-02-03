$(document).ready(function () {
  $(".ct_menu_bar").click(function () {
    $("main").addClass("ct_show");
  });
  $(".ct_close_sidebar").click(function () {
    $("main").removeClass("ct_show");
  });

  //   Dash Graph js S
});


 var options = {
    chart: {
      type: 'bar',
      height: 320,
      toolbar: { show: false }
    },

    series: [
      {
        name: 'Total Registered Users',
        data: [90, 65, 55, 85, 45, 75]
      },
      {
        name: 'Active Users',
        data: [60, 35, 25, 55, 12, 30]
      }
    ],

    colors: ['#dff1ee', '#178c9c'],

    plotOptions: {
      bar: {
        borderRadius: 10,
        columnWidth: '38%',
        endingShape: 'rounded'
      }
    },

    dataLabels: {
      enabled: false
    },

    stroke: {
      width: 0
    },

    xaxis: {
      categories: ['Jan', 'Mar', 'May', 'Jul', 'Sep', 'Nov'],
      labels: {
        style: { colors: '#64748b' }
      }
    },

    yaxis: {
      max: 100,
      tickAmount: 4,
      labels: {
        formatter: val => val + '%',
        style: { colors: '#64748b' }
      }
    },

    grid: {
      borderColor: '#e5e7eb',
      strokeDashArray: 5
    },

    tooltip: {
      custom: function({ series, seriesIndex, dataPointIndex }) {
        if (dataPointIndex === 3) {
          return `
            <div style="
              background:#fff;
              padding:12px 14px;
              border-radius:10px;
              box-shadow:0 8px 25px rgba(0,0,0,.15);
              font-size:13px;
            ">
              <strong>March 2025</strong>
              <div style="margin-top:6px;color:#555">
                ● Total Registered Users <b>20,000</b>
              </div>
              <div style="color:#178c9c">
                ● Active Users <b>55%</b>
              </div>
            </div>
          `;
        }
        return '';
      }
    },

    legend: {
      show: false
    }
  };

  var chart = new ApexCharts(
    document.querySelector("#activityChart"),
    options
  );

  chart.render();



   var options = {
    chart: {
      type: 'donut',
      height: 280
    },

    series: [25, 25, 20, 16, 7, 7],

    labels: [
      'Location',
      'Text',
      'Media',
      'Voice',
      'Document',
      'Contact'
    ],

    colors: [
      '#0f766e',
      '#bae6fd',
      '#022c22',
      '#737373',
      '#d1d5db',
      '#06b6d4'
    ],

    plotOptions: {
      pie: {
        donut: {
          size: '70%'
        }
      }
    },

    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return Math.round(val) + '%';
      }
    },

    legend: {
      position: 'bottom'
    }
  };

  var chart = new ApexCharts(
    document.querySelector("#donutChart"),
    options
  );

  chart.render();
