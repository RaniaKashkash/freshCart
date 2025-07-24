export function getTimeLeft(targetDate){
    if(!targetDate)
        targetDate=new Date().setHours(23,19,0,999);

    const timeLeft=targetDate-new Date().getTime();

    if(timeLeft>0){
        const ONE_HOUR_MS=60*60*1000;
        const ONE_MIN_MS=60*1000;
        const ONE_SECOND_MS=1000;

        const hours=Math.trunc(timeLeft/ONE_HOUR_MS);
        const minutes=Math.trunc((timeLeft%ONE_HOUR_MS)/ONE_MIN_MS);
        const seconds=Math.trunc(((timeLeft%ONE_HOUR_MS)%ONE_MIN_MS)/ONE_SECOND_MS);
        return {hours,minutes,seconds}
    }else{
        return {hours:0,minutes:0,seconds:0}
    }

    
}