const refs = {
	start: document.querySelector('button[data-start]'),
	stop: document.querySelector('button[data-stop]')
};
let intervalId = null;

refs.start.addEventListener('click', onClickBtnBodyBackgroundExchange);

refs.stop.addEventListener('click', onClickBtnBodyBackgroundExchangeIsFinished)



function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onClickBtnBodyBackgroundExchange(e) {
	intervalId = setInterval(() => { document.body.style.background = getRandomHexColor(); 
	}, 1000);
	e.target.setAttribute('disabled', true);
}

function onClickBtnBodyBackgroundExchangeIsFinished() {
	clearInterval(intervalId);
	document.body.style.background = 'none';
	refs.start.removeAttribute('disabled');
}
