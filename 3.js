/*
In 1978 the British Medical Journal reported on an outbreak of influenza at a British boarding school. 
There were 1000 students. The outbreak began with one infected student.

We want to study the spread of the disease through the population of this school. 
The total population may be divided into three: the infected (i), those who have recovered (r), 
and those who are still susceptible (s) to get the disease.

We will study the disease on a period of tm days. One model of propagation uses 3 differential equations:

(1) s'(t) = -b * s(t) * i(t)
(2) i'(t) =  b * s(t) * i(t) - a * i(t)
(3) r'(t) =  a * i(t)
where s(t), i(t), r(t) are the susceptible, infected, recovered at time t and s'(t), i'(t), r'(t) 
the corresponding derivatives. b and a are constants: b is representing a number of contacts which can 
spread the disease and a is a fraction of the infected that will recover.

We can transform equations (1), (2), (3) in finite differences 
(https://en.wikipedia.org/wiki/Finite_difference_method#Example:_ordinary_differential_equation) 
(http://www.codewars.com/kata/56347fcfd086de8f11000014)

(I)    S[k+1] = S[k] - dt * b * S[k] * I[k]
(II)   I[k+1] = I[k] + dt * (b * S[k] * I[k] - a * I[k])
(III)  R[k+1] = R[k] + dt * I[k] *a
The interval [0, tm] will be divided in n small intervals of length dt = tm/n. Initial conditions here could be : 
S0 = 999, I0 = 1, R0 = 0 Whatever S0 and I0, R0 (number of recovered at time 0) is always 0.

The function epidemic will return the maximum number of infected as an integer
 (truncate to integer the result of max(I)).
*/
function epidemic(tm, n, s0, i0, b, a) {
    const IArray = new Array(n).fill();
    const SArray = new Array(n).fill();
    const RArray = new Array(n).fill();
    const dt = tm / n;

    [IArray[0], SArray[0], RArray[0]] = [i0, s0, 0];

    IArray.slice(1).map((k, i) => {
        IArray[i + 1] = IArray[i] + dt * (b * SArray[i] * IArray[i] - a * IArray[i]);
        SArray[i + 1] = SArray[i] - dt * b * SArray[i] * IArray[i];
        RArray[i + 1] = RArray[i] + dt * IArray[i] * a;
    });
    return Math.ceil(Math.max(...IArray));
}