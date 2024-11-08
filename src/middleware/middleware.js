import { format } from "date-fns";

export const formatCategoryName = (name) => {

    return name.replaceAll(' ', '').replaceAll(',', '_').replaceAll('&', '_').toLowerCase();

}

export const formatDate = (date) => {

    return format(new Date(date), "dd MMM'.' yyyy");
    
}

export const formatDate2 = (date) => {

    return format(new Date(date), "dd-MM-yyyy");
    
}

export const decodeURL = (url) => {

    const newURL = decodeURI(url);
    return newURL;

}

//Truncate text helper created by Setonji

export const truncateText = (str, max) => {

    if (str.length > max) {

        const newText = str.substring(0, max) + '...';
        return newText;
        
    }

    else{
        return str;
    }

}
