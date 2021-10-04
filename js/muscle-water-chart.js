const drawMuscleAndWater = (muscle, water, month, year) => {
	let muscleWaterCtx = document.getElementById("muscle-water-chart").getContext("2d"),
		months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
		labels = [];

	for (let i = 0; i < 12; i++) {
		labels.push(`${months[month].slice(0, 3)} ${year}`);
		month = (month + 1) % 12;
		if (month === 11) year++;
	}

	return new Chart(muscleWaterCtx, {
		type: "line",
		data: {
			labels: labels,
			datasets: [
				{
					type: "line",
					label: "% masa muscular",
					data: muscle,
					backgroundColor: "rgba(73, 18, 150, 0.3)",
					borderColor: "rgb(73, 18, 150)",
					borderWidth: 1,
				},
				{
					type: "line",
					label: "% agua",
					data: water,
					backgroundColor: "rgba(18, 99, 150, 0.3)",
					borderColor: "rgb(18, 99, 150)",
					borderWidth: 1,
				},
			],
		},
		options: {
			scales: {
				yAxes: [{ticks: {beginAtZero: true, max: 100}}],
			},
		},
	});
};
