
const getCroppedImageUrl = (url: string) => {
    const tar = 'media/';
    const index = url.indexOf(tar) + + tar.length;
    return url.slice(0,index) + 'crop/600/400/' + url.slice(index) ;
}

export default getCroppedImageUrl;