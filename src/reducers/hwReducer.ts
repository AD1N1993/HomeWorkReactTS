export type PersonType = { id: string, name: string, age: number }
export type hwReducerType = Array<PersonType>;

type SortHumanAcType = {
    type: "SORT-ARRAY-HUMAN";
    payload: "up" | "down"
}
type checkHumanAcType = {
    type: "CHECK-ARRAY-HUMAN";
    payload: 18
}

type ActionsType = SortHumanAcType | checkHumanAcType


export const hwReducer = (state: hwReducerType, action: ActionsType) => {
    switch (action.type) {
        case "SORT-ARRAY-HUMAN":
            if (action.payload === "up") {
                let sortState = state.sort(function (a, b) {
                    if (a.name > b.name) {
                        return 1;
                    }
                    if (a.name < b.name) {
                        return -1;
                    }
                    return 0;
                });
                return sortState;
            } else if (action.payload === "down") {
                let sortState = state.sort(function (a, b) {
                    if (a.name < b.name) {
                        return 1;
                    }
                    if (a.name > b.name) {
                        return -1;
                    }
                    return 0;
                });

                return sortState;
            }
            break
        case "CHECK-ARRAY-HUMAN":
            let checkedState = state.filter(p => p.age > 18);
            return checkedState;
        default:
            throw new Error('error');
    }


}

export const sortHumanAC = (payload: "up" | "down"): ActionsType => {
    return {type: "SORT-ARRAY-HUMAN", payload: payload};
}
export const checkHumanAC = (payload: 18): ActionsType => {
    return {type: "CHECK-ARRAY-HUMAN", payload: payload};
}