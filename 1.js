/*
I always thought that my old friend John was rather richer than he looked, 
but I never knew exactly how much money he actually had. One day (as I was plying him with questions) he said:
"Imagine I have between m and n Zloty..." (or did he say Quetzal? I can't remember!)
"If I were to buy 9 cars costing c each, I'd only have 1 Zloty (or was it Meticals?) left."
"And if I were to buy 7 boats at b each, I'd only have 2 Ringglets (or was it Zloty?) left."
Could you tell me in each possible case
how much money f he could possibly have ?
the cost c of a car?
the cost b of a boat?
So, I will have a better idea about his fortune. Note that if m-n is big enough, 
you might have a lot of possible answers.
Each answer should be given as ["M: f", "B: b", "C: c"] and all the answers as 
[ ["M: f", "B: b", "C: c"], ... ]. "M" stands for money, "B" for boats, "C" for cars.
Note: m, n, f, b, c are positive integers, where 0 <= m <= n or m >= n >= 0. m and n are inclusive.
*/

function howmuch(m, n) {
    const res = [];
    let min = 0;
    let max = 0;
    let cars = 0;
    let boats = 0;

    if (m > n) {
        min = n;
        max = m;
    } else {
        min = m;
        max = n;
    }

    for (let i = min; i < max + 1; i++) {
        if (i > 8) {
            cars = GetCar(i);
            boats = GetBoat(i);
        }

        if (cars > 0 && boats > 0) {
            res.push([`M: ${i}`, `B: ${boats}`, `C: ${cars}`]);
        }
    }
    function GetCar(i) {
        let cars = 0;

        if ((i - 1) % 9 == 0)
            cars = (i - 1) / 9;
        return cars;
    }

    function GetBoat(i) {
        let boats = 0;
        if ((i - 2) % 7 == 0)
            boats = (i - 2) / 7;

        return boats;

    }
    return res;
}