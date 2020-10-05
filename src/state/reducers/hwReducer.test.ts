import {checkHumanAC, hwReducer, hwReducerType, sortHumanAC} from "./hwReducer";


test("should return sortUp array humans",()=>{

    const startState:hwReducerType = {
        person: [
            {id: '1', name: "Alex", age: 32},
            {id: '2', name: "Viktor", age: 16},
            {id: '3', name: "Den", age: 25},
            {id: '4', name: "Bork", age: 17},
            {id: '5', name: "Igor", age: 52},
            {id: '6', name: "Helen", age: 12},
            {id: '7', name: "Julia", age: 100}
        ],
        loading: false
    }

    const action = sortHumanAC("up");

    const endState = hwReducer(startState,action);

    expect(endState.person).toEqual([
        {id:'1', name:"Alex", age: 32},
        {id:'4', name:"Bork", age: 17},
        {id:'3', name:"Den", age: 25},
        {id:'6', name:"Helen", age: 12},
        {id:'5', name:"Igor", age: 52},
        {id:'7', name:"Julia", age: 100},
        {id:'2', name:"Viktor", age: 16},
    ])

    expect(endState).toBeDefined();
    if (endState) {
        expect(endState.person.length).toBe(7);
    }

})
test("should return sortDown array humans",()=>{

    const startState:hwReducerType = {
        person: [
            {id: '1', name: "Alex", age: 32},
            {id: '2', name: "Viktor", age: 16},
            {id: '3', name: "Den", age: 25},
            {id: '4', name: "Bork", age: 17},
            {id: '5', name: "Igor", age: 52},
            {id: '6', name: "Helen", age: 12},
            {id: '7', name: "Julia", age: 100}
        ],
        loading: false
    }

    const action = sortHumanAC("down");

    const endState = hwReducer(startState,action);

    expect(endState.person).toEqual([
        {id:'2', name:"Viktor", age: 16},
        {id:'7', name:"Julia", age: 100},
        {id:'5', name:"Igor", age: 52},
        {id:'6', name:"Helen", age: 12},
        {id:'3', name:"Den", age: 25},
        {id:'4', name:"Bork", age: 17},
        {id:'1', name:"Alex", age: 32},
    ])

    expect(endState).toBeDefined();
    if (endState) {
        expect(endState.person.length).toBe(7);
    }

})

test("should return sort array humans over 18",()=>{

    const startState:hwReducerType = {
        person: [
            {id: '1', name: "Alex", age: 32},
            {id: '2', name: "Viktor", age: 16},
            {id: '3', name: "Den", age: 25},
            {id: '4', name: "Bork", age: 17},
            {id: '5', name: "Igor", age: 52},
            {id: '6', name: "Helen", age: 12},
            {id: '7', name: "Julia", age: 100}
        ],
        loading: false
    }

    const action = checkHumanAC(18);

    const endState = hwReducer(startState,action);

    expect(endState.person).toEqual([
        {id:'1', name:"Alex", age: 32},
        {id:'3', name:"Den", age: 25},
        {id:'5', name:"Igor", age: 52},
        {id:'7', name:"Julia", age: 100}
    ])

    expect(endState).toBeDefined();
    if (endState) {
        expect(endState.person.length).toBe(4);
    }
})