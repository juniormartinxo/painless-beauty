<?php include '../header.php'; ?>
<?php include '../sidebar.php'; ?>
<?php include '../content.php'; ?>
	<h1>Doughnut Chart</h1>
	<div id="chartContainer"></div>

<?php
$dataPoints = [
    ["y" => 75, "legendText" => "Google", "label" => "Google"],
    ["y" => 25, "legendText" => "Bing", "label" => "Bing"],
];
?>

	<script type="text/javascript">
        $(function ()
        {
            var chart = new CanvasJS.Chart("chartContainer", {
                title           : {
                    text: "Desktop Search Engine Market Share, Jul-2016"
                },
                animationEnabled: true,
                legend          : {
                    fontSize  : 20,
                    fontFamily: "Helvetica"
                },
                theme           : "theme2",
                data            : [
                    {
                        type                : "doughnut",
                        indexLabelFontFamily: "Garamond",
                        indexLabelFontSize  : 20,
                        indexLabel          : "{label} {y}%",
                        startAngle          : -20,
                        showInLegend        : true,
                        toolTipContent      : "{legendText} {y}%",
                        dataPoints          : <?php echo json_encode($dataPoints, JSON_NUMERIC_CHECK); ?>
                    }
                ]
            });
            chart.render();
        });
	</script>

<?php include '../footer.php'; ?>