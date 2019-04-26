import React, { Component } from 'react';
import './Demo1.css';
// import '../utils/demo1';
import anime from 'animejs';
import * as SVG from 'svg.js';


class Demo1 extends Component{ 
    
    constructor(props) {
        super(props)
        this.state = {}
    }

    render(){
        return (
            <div id="container">
                <div className="wrapper"></div>
                <button onClick={this.look}>look</button>
            </div>
            )    
    }
    
    componentDidMount() {
        let drawing = SVG('container').width(500).height(300);
        let cx = drawing.cx();

        let input = drawing.rect(100, 30).x(100).y(10).radius(5).fill('rgb(190, 120, 150)');
        let output = drawing.rect(100, 30).x(100).y(200).radius(5).fill('rgb(190, 120, 150)');
        let firstNodes = [];
        for (let i = 0; i < 4; i++) {
            let node = drawing.circle(30).x(cx - 100 + i * 30).y(80).fill('rgb(150, 200, 230)');
            firstNodes.push(node);
        }
        let secondNodes = [];
        for (let i = 0; i < 4; i++) {
            let node = drawing.circle(30).x(90 + i * 30).y(150).fill('rgb(150, 200, 230)');
            secondNodes.push(node);
        }
        let firstPaths = [];
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
        this.setState({
            drawing: drawing
        })
        
    }

    look = () => {
        console.log(this.state.drawing);
    }
    
    
}
export default Demo1;
