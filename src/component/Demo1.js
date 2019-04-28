import React, { Component } from 'react';
import './Demo1.css';
// import '../utils/demo1';
import anime from 'animejs';
import * as SVG from 'svg.js';


class Demo1 extends Component{ 
    myRef = React.createRef();
    constructor(props) {
        super(props)
        this.state = {}
    }

    render(){
        return (
            <div id="container">
                <div className="wrapper"></div>
                <button onClick={this.look}>look</button>
                <button onClick={this.play}>play</button>
            </div>
            )    
    }
    
    componentDidMount() {
        let drawing = SVG('container').width(500).height(500);
        let cx = drawing.cx();

        /* 神经网络 */
        let net = drawing.group();
        let input = net.rect(100, 30).x(cx - 50).y(210).radius(5).fill('rgb(190, 120, 150)');
        let output = net.rect(100, 30).x(cx - 50).y(10).radius(5).fill('rgb(190, 120, 150)');
        let inputText = net.text('x').x(input.cx()).y(input.y());
        let outputText = net.text('y').x(output.cx()).y(output.y());
        let firstNodes = [];
        for (let i = 0; i < 5; i++) {
            let node = net.circle(30).x(cx - 115 + i * 50).y(80).fill('rgb(150, 200, 230)');
            firstNodes.push(node);
        }
        let secondNodes = [];
        for (let i = 0; i < 4; i++) {
            let node = net.circle(30).x(cx - 90 + i * 50).y(150).fill('rgb(150, 200, 230)');
            secondNodes.push(node);
        }
        /*  */
        let firstPaths = [];
        for (let i = 0; i < 4; i++) {
            let path = net.path(`
                M${input.cx()} ${input.cy()}
                L${secondNodes[i].cx()} ${secondNodes[i].cy()}
            `).fill('none').stroke({width: 1}).back()
            firstPaths.push(path);
        }
        let secondPaths = [];
        for (let i = 0; i < 5; i++) {
            let path = net.path(`
                M${output.cx()} ${output.cy()}
                L${firstNodes[i].cx()} ${firstNodes[i].cy()}
            `).fill('none').stroke({width: 1}).back()
            secondPaths.push(path);
        }
        let interPaths = [];
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 5; j++) {
                let path = net.path(`
                    M${secondNodes[i].cx()} ${secondNodes[i].cy()}
                    L${firstNodes[j].cx()} ${firstNodes[j].cy()} 
                `).fill('none').stroke({width: 1}).back()
                interPaths.push(path);
            }
        }
        net.move(-300, 100);
        // let net2 = net.clone().move(100);
        // net.scale(0.5);
        /* ps */
        let ps = drawing.group();
        let psRect = ps.rect(100, 50).x(400).y(50).radius(5).fill('rgb(200, 255, 255)');
        let psText = ps.text('ps');
        psText.x(psRect.cx() - 10).y(psRect.cy() - 10);
        ps.addClass('ps');

        /* worker */
        let worker = drawing.group();
        let workerRect = worker.rect(100, 50).x(400).y(150).radius(5).fill('rgb(200, 255, 255)');
        let workerText = worker.text('worker').x(workerRect.cx() - 30).y(workerRect.cy() - 10);
		console.log("TCL: Demo1 -> componentDidMount -> workerText", workerText)
        
        let worker1 = worker.clone();
        let worker2 = drawing.rect(100, 50).x(400).y(230).radius(5).fill('rgb(200, 255, 255)');
        // let path = drawing.path("M 340,178 104,478 580,490 Z");
        // let length = path.length();
        // let rect = drawing.rect(5, 5)
        // path.fill('none').stroke({width:1, color: '#ccc'}).move(10,10).scale(0.5)
        // path.animate(3000).rotate(365).loop();
        // firstNodes[0].animate(5000, '<>').during(function(pos, morph, eased){
        //     var m = path.matrixify()
        //     var p = new SVG.Point(path.pointAt(eased * length)).transform(m)
        //     rect.move(p.x, p.y)
        // }).loop(true, true)
        net.addClass('net')
        let timeline = anime.timeline({
            easing: 'easeOutExpo',
            duration: 750
        })
        .add({
            targets: 'net',
            translateX: 250,
        });
        
        this.setState({
            drawing: drawing,
            net: net,
            ps: ps,
            worker1: worker1,
            worker2: worker2
        });
    }

    sync = () => {

    }

    play = () => {
        // const { translateX, translateY } = {x:100, y:100};
        const translateX = 300;
        const translateY = 300;
        console.log(translateX, translateY);
        console.log(this.state.net)
        let a = anime({
            targets: '.net',
            translateX: { value: translateX },
            translateY: { value: translateY },
            duration: 2000
          })

        console.log(a);
    }

    look = () => {
        console.log(this.state.drawing);
    }
    
    
}
export default Demo1;
