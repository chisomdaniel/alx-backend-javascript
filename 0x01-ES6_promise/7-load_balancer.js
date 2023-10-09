export default async function loadBalancer(chinaDownload, USDownload) {
    let value;

    let p1 = chinaDownload.then((value1)=> {
        value = value1;
    })

    let p2 = USDownload.then((value2)=> {
        value = value2;
    })

    await Promise.race([p1, p2])

    return value;
}