import { array } from "yargs";
import Person from "./Person";

export default class Team {
    team: object[];

    constructor(...args: object[]) {
        this.team = [];
        this.team.push(...args);
    }

    [Symbol.iterator]() {
        let current = 0
        let last = this.team.length
        let arr = this.team
        
        return {
            next() {          
                if (current < last) {
                    return {
                        value: arr[current++],
                        done: false,
                    }              
                } else {
                    return {
                        value: arr[current],
                        done: true,
                    }
                }
            }
        }    
    }
}

/*
const archer = new Person("Лучник", "Bowman", 50, 1, 40, 10)
const zombie = new Person("Зомби", "Bowman", 40, 1, 30, 10)
const shooter = new Person("Стрелок", "Bowman", 30, 1, 50, 20)

const enemy = new Team(archer, zombie, shooter)

const data = enemy[Symbol.iterator]()
console.log(data.next())
console.log(data.next())
console.log(data.next())
console.log(data.next())
*/