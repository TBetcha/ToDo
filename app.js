/** @format */

let UIController = function fixTime() {
	DOMElements = {
		exact_time: 'exact_time',
		submit_time: 'time_submit',
	};

	//define date
	let d = new Date();

	//pullout old html
	html = '<div class="top_date">%Saturday, April 20 2020%</div>';

	//replace w/ new html
	newHtml = html.replace(
		'%Saturday, April 20 2020%',
		`${d.getDate()}/ ${d.getMonth()}/ ${d.getFullYear()} `
	);

	document.getElementById(
		'cur_date'
	).innerHTML = `${d.getDate()}/ ${d.getMonth()}/ ${d.getFullYear()} `;
};

let taskTimes = [];
let taskTypes = [];
let taskDayNight = [];

function getTime(timeInput) {
	let taskTime = document.getElementById(DOMElements.exact_time).value;
	taskTimes.push(taskTime);
	console.log(taskTime);
	console.log(taskTimes[0]);

	let taskType = document.getElementById('type_select');
	let taskTypeText = taskType.options[taskType.selectedIndex].innerHTML;
	console.log(taskTypeText);

	//get option AM/PM
	const sel = document.getElementById('time_kind');
	const dayOrNight = sel.options[sel.selectedIndex].text;
	console.log(dayOrNight);
	taskDayNight.push(dayOrNight);

	//get type of task
	const opt = document.getElementById('type_select');
	const kindOfTask = opt.options[sel.selectedIndex].text;
	console.log(kindOfTask);
	taskTypes.push(kindOfTask);

	appendToActivities();
}

function appendToActivities() {
	//create children in the list under activites
	const li = document.createElement('li');
	//pop values from the array to get text values to set
	//could have just took the value from input and made the list
	let newTaskTime = taskTimes.pop();
	let newTaskTimeDayNight = taskDayNight.pop();
	let newKindOfTask = taskTypes.pop();
	console.log(newKindOfTask);

	li.appendChild(
		document.createTextNode(`${newKindOfTask}: ${newTaskTime} ${newTaskTimeDayNight}`)
	);

	li.className = 'activities_list';
	const link = document.createElement('a');
	link.innerHTML = '<class="activities_list"></li>';
	li.appendChild(link);

	document.querySelector('.activities_list').appendChild(li);
}

UIController();
document.getElementById(DOMElements.submit_time).addEventListener('click', getTime);
