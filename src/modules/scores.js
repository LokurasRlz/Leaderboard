export default function dynamicScore(userValue, scoreValue) {
  const scoreList = document.getElementById('board');
  const scoreItem = document.createElement('li');
  scoreItem.classList.add('li');
  scoreItem.innerHTML += `${userValue}: ${scoreValue}`;
  scoreList.appendChild(scoreItem);
}