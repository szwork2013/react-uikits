import React, { Component } from 'react';
import {CN, TitleBlock} from '../util/tools';
import {TimeInput} from '../component/TimeInput';
import {CodeView} from '../component/CodeView';

export class TimeInputPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }
    handleTimeChange(value){
        this.setState({
            value
        });
    }
    render() {
        return (
            <section>
                {TitleBlock('时间输入')}

                <h4>默认时间输入</h4>
                <CodeView component={<TimeInput onChange={value => {}} />}>
                    {`<TimeInput onChange={onChangeFunction} />`}
                </CodeView>
                <br/>

                <h4>带默认值的时间输入</h4>
                <CodeView component={<TimeInput value={'12:32:21'} onChange={value => {}} />}>
                    {`<TimeInput value={'12:32:23'} onChange={onChangeFunction} />`}
                </CodeView>
                <br/>

                <h4>onChange 事件</h4>
                <CodeView component={
                    <div>
                        <p>输入的时间是 {this.state.value}</p>
                        <br/>
                        <TimeInput onChange={this.handleTimeChange.bind(this)} />
                    </div>
                }>
                    {`<TimeInput onChange={onChangeFunction}/>`}
                </CodeView>
                <br/>

                <h4>简洁版</h4>
                <CodeView component={<TimeInput simple={true} onChange={value => {}} />}>
                    {`<TimeInput simple={true} onChange={onChangeFunction} />`}
                </CodeView>
                <br/>

                <h4>属性</h4>
                <table className="dot table">
                    <thead>
                        <tr>
                            <th>名称</th>
                            <th>描述</th>
                            <th>类型</th>
                            <th>默认值</th>
                            <th>required</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>value</td>
                            <td>默认值</td>
                            <td>字符串(例如：11:22:32)</td>
                            <td>00:00:00</td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>simple</td>
                            <td>简洁版</td>
                            <td>Boolean</td>
                            <td>false</td>
                            <td>否</td>
                        </tr>
                        <tr>
                            <td>onChange</td>
                            <td>时间变化触发事件</td>
                            <td>函数(时间字符串)</td>
                            <td>
                            {`onChange(time){

                            }`}
                            </td>
                            <td>是</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        );
    }
}
