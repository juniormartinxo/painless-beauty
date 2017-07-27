/**
 * Created by Junior on 26/06/2017.
 */
$(document).ready(function ()
{
    $(".nano").nanoScroller();

    chartDonutDesempenho('chartDonutPsicotecnico', 99.76);
    chartDonutDesempenho('chartDonutLegislacao', 73.14);
    chartDonutDesempenho('chartDonutDirecao', 41.52);
    chartDonutDesempenho('chartDonutCondensado', 52.29);
    chartDonutDesempenho('chartDonutAutomovel', 36.87);
    chartDonutDesempenho('chartDonutMotocicleta', 72.07);
    chartDonutDesempenho('chartDonutCavaloMecanico', 60.25);
    chartDonutDesempenho('chartDonutOnibus', 61.17);
});

function chartDonutDesempenho(element, dataY)
{
    CanvasJS.addColorSet("colors",
        [
            "#3384ff",
            "#ff674a"
        ]
    );

    var chart = new CanvasJS.Chart(element,
        {
            colorSet        : "colors",
            title           : {},
            animationEnabled: true,
            data            : [
                {
                    type          : "doughnut",
                    startAngle    : 60,
                    toolTipContent: "{legendText}: <strong>#percent% </strong>",
                    showInLegend  : false,
                    dataPoints    : [
                        {y: dataY, indexLabel: "Aprovados #percent%", legendText: "Aprovados"},
                        {y: (100 - dataY), indexLabel: "Reprovados #percent%", legendText: "Reprovados"}
                    ]
                }
            ]
        });
    chart.render();
}