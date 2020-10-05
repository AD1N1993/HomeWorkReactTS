import React, {ChangeEvent, useCallback, useState} from "react";
import './Range.module.scss'
export type RangeTypeProps = {
    value: string
    maxValue: string
    minValue: string
    step: string
    setValue: (value: string) => void
}

export const RangeC = React.memo((props: RangeTypeProps) => {

    const setValue = props.setValue
    const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }, [props.value])

    return (
        <>
            <form>
                <div className="form-group">
                    <label htmlFor="formControlRange">Example Range input {props.value}</label>
                    <input
                        value={props.value}
                        type="range"
                        className="form-control-range"
                        id="formControlRange"
                        min={props.minValue}
                        max={props.maxValue}
                        step={props.step}
                        onChange={e => {
                            onChange(e)
                        }}
                    />
                </div>
            </form>
        </>
    );
})