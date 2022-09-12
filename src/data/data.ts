
const photo = ["https://kick-league.ru/wp-content/uploads/2022/09/1662904800_Real-v-volevom-stile-pereigral-Mal-orku.jpg"]
const title=["Dljrkfjlerkjflek"]
const description = ["Вal storage или sharedpreferences( на своё усмотрение, плагин, который сохраняет данные локально).  Для тестового необходимо использовать свой json от фаера, после завершения заглушки и логики, скинем данные для прилы( json , package name  и иконку )"]

export type DataType={
    id:number
    title:string
    photo:string
    description:string
}
export const data:DataType[]= new Array(10).fill(null).map((el, index) => ({
    id: index + 1,
    title:title[index],
    photo: photo[index],
    description: description[index]
}))