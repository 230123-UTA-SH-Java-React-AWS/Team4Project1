export interface Pokemon {
    sprites?: {
        front_shiny:string
    },
    name:string,
    id:number,
    stats?: Stat[],
    damage?:number,
    health?:number,
    img?:string
}

export interface Stat {
    base_stat:number
}