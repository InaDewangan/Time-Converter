const btn = document.querySelector('button');
const firstFormat = document.querySelector('.first-format');
const ansFirst = document.querySelector('.first-ans');
const secondFormat = document.querySelector('.second-format');
const ansSecond = document.querySelector('.second-ans');


btn.addEventListener('click', () => {
    const time = document.getElementById('user-input').value.trim();
    let ans;
    let [t, z] = time.split(" ");
    console.log(`${t} and ${z}`);
    let [h, m, s] = t.split(':').map(Number);
    console.log(h, m, s);

    if (z === "AM" || z === "PM") {
        if (z === "AM") {
            console.log(`${h}:${m}:${s}`);
            ans = `${h}:${m}:${s}`;
        }
        else if (h < 12) {
            h = h + 12;
            console.log(`${h}:${m}:${s}`);
            ans = `${h}:${m}:${s}`;
        }
        else {
            console.log(`00:${m}:${s}`);
            ans = `00:${m}:${s}`;
        }
        firstFormat.innerText = "12-Hour Format:";
        ansFirst.innerText = time;
        secondFormat.innerText = "24-Hour Format:";
        ansSecond.innerText = ans;
    }
    else {
        if (h === 0 || h === 24) {
            console.log(`12:${m}:${s} AM`);
            ans = `12:${m}:${s} AM`;
        }
        else if (h < 12) {
            console.log(`${h}:${m}:${s} AM`);
            ans = `${h}:${m}:${s} AM`;
        }
        else {
            h -= 12;
            console.log(`${h}:${m}:${s} PM`);
            ans = `${h}:${m}:${s} AM`;
        }
        firstFormat.innerText = "24-Hour Format:";
        ansFirst.innerText = time;
        secondFormat.innerText = "12-Hour Format:";
        ansSecond.innerText = ans;
    }
});

