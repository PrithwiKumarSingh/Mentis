import ogs from "open-graph-scraper";

async function scrape() {
    const  result  = await ogs({
        url: "https://youtu.be/FUeeflBbcGg?si=tT2Rw59X_30UOqRO"
    });

    console.log(result);
}

scrape();