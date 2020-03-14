import React, { useState, useEffect } from 'react';

function Example() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    /* 相当于 componentDidMount 和 componentDidUpdate:
    componentDidMount() {
        document.title = `You clicked ${this.state.count} times`;
    }

    componentDidUpdate() {
        document.title = `You clicked ${this.state.count} times`;
    } 
    useEffect 默认情况下，它在第一次渲染之后和每次更新之后都会执行。
    为什么要在 effect 中返回一个函数？ 这是 effect 可选的清除机制。
    每个 effect 都可以返回一个清除函数。如此可以将添加和移除订阅的逻辑放在一起。它们都属于 effect 的一部分。
    */
    useEffect(() => {
        console.log('useEffect1')
        document.title = `You clicked ${count1} times`;
        setCount2(count2 + 1)
    }, [count1]);

    useEffect(() => {
        console.log('useEffect2')
        // document.title = `You clicked ${count} times`;
    }, [count2]); // 加上一个[],这样就可以控制这个useEffect里的函数只执行一次

    useEffect(() => {
        console.log('useEffect4')
        // document.title = `You clicked ${count} times`;
    }, []); // 加上一个[],这样就可以控制这个useEffect里的函数只执行一次

    useEffect(() => {
        console.log('useEffect3')
        // document.title = `You clicked ${count} times`;
    }, [count1]); // 第二个可选参数可以控制是否执行这个useEffect的函数，在某些情况下可以通过跳过 Effect 进行性能优化


    return (
        <div>
            <p>you clicked count1: {count1} times</p>
            <p>you clicked count2: {count2} times</p>
            <button onClick={() => setCount1(count1 + 1)}>
                Click me
            </button>
        </div>
    );
}

export default Example