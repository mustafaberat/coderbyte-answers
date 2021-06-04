/*
fonksiyon(A, F, N);
A dizini, F adet olmalıydı ama sayılar kayboldu. Bu sayılar 7 sayısından küçük 1 sayısından büyük olduğu bilinmektedir. Tüm sayıların ortalaması N olması için kayıp sayılar bulunabilir mi? Bulunursa bu sayılar neler olmalı(1 örnek yeterli), bulunmazsa da 0 diyebilirsiniz.
Örnekler:

Given A = [3, 2, 4, 3], F = 2, M = 4, your function should return [6, 6]. The arithmetic mean of all the rolls Is (3 + 2 + 4 + 3 + 6 + 6) / 6 = 24 / 6 = 4.
Given A = [1, 5, 6], F = 4, M = 3. your function may retum [2. 1, 2, 4] or [6, 1, 1, 1] (among others).
Given A = [1, 2, 3, 4], F = 4, M = 6, your function should return [0]. It is not possible to obtain such a mean. 4. Given A = [6,11 F = 1, M = 1, your function should return [0]. It Is not possible to obtain such a mean.
*/

function solution(A, F, M) {
    maxValidDice = 6;
    lenOfA = A.length;
    sumOfA = A.reduce((a,b)=>a+b,0)

    sumOfResultMustBe = (M *  (lenOfA + F) - sumOfA)

    if(sumOfResultMustBe <= (F*maxValidDice) && sumOfResultMustBe >= F){
        returnResult = new Array(F).fill(1);
        for(let i = 0; i<F; i++){
            while(true){
                // CONTROL END POINT
                sumOfReturnResultArr = (returnResult.reduce((a,b)=>a+b,0))
                if(sumOfReturnResultArr == sumOfResultMustBe){
                    return returnResult;
                } 
                // END OF CONTROL

                if(returnResult[i] < maxValidDice){
                    returnResult[i] += 1;
                } else{
                    break;
                }
            }
        }
    }

    return [0];
}
