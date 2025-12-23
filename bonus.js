document.addEventListener('DOMContentLoaded', function () {
    const presentesBonus = [
        'Vale sushi 🍿',
        'Vale sushi 🍔',
        'Vale sushi 🎀'
    ];

    const presentBoxes = document.querySelectorAll('.present-box');
    const resultSection = document.getElementById('result');
    const presentResult = document.getElementById('present-result');

    presentBoxes.forEach((box, index) => {
        box.textContent = '🎁';

        box.addEventListener('click', function () {
            const sorteado = presentesBonus[index];
            presentResult.textContent = sorteado;

            document.querySelector('.present-options').style.display = 'none';
            resultSection.style.display = 'block';
        });
    });
});
