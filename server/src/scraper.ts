
import ogs from "open-graph-scraper";

export async function scraper({link }: {link: string}) {
    const { result } = await ogs({
        url: link
    });

    console.log(result);
}
