import React, { Component } from 'react';
import './Demo1.css';
import anime from 'animejs';
import * as SVG from 'svg.js';
import { Button, Table } from 'antd';
import {withRouter} from 'react-router';
import { Row, Col } from 'antd';

const data = [
    {step: 0, weight: 0.422631, biase: 0.115551, loss: 39.021523},
    {step: 1000, weight: 0.502552, biase: 0.689394, loss: 46.659107},
    {step: 4000, weight: 0.765290, biase: 2.227631, loss: 45.543011},
    {step: 5000, weight: 0.853151, biase: 2.682982, loss: 59.393356},
    {step: 7000, weight: 0.994720, biase: 3.512970, loss: 39.383644},
    {step: 9000, weight: 1.090816, biase: 4.243472, loss: 25.373802},
    {step: 11000, weight: 1.199961, biase: 4.895051, loss: 46.616871},
    {step: 12000, weight: 1.233297, biase: 5.191043, loss: 12.064821},
    {step: 13000, weight: 1.278948, biase: 5.471645, loss: 11.769929},
    {step: 15000, weight: 1.377984, biase: 5.986706, loss: 15.730288},
    {step: 16000, weight: 1.415033, biase: 6.221362, loss: 16.245487},
    {step: 17000, weight: 1.447510, biase: 6.441733, loss: 12.214647},
    {step: 19000, weight: 1.510313, biase: 6.845005, loss: 3.339030},
    {step: 20000, weight: 1.530604, biase: 7.027592, loss: 5.197101},
    {step: 23000, weight: 1.603215, biase: 7.517520, loss: 4.281068},
    {step: 28000, weight: 1.699187, biase: 8.157361, loss: 2.419945},
    {step: 31000, weight: 1.749498, biase: 8.461464, loss: 2.141799},
    {step: 32000, weight: 1.763784, biase: 8.551688, loss: 1.301431},
    {step: 33000, weight: 1.780349, biase: 8.637098, loss: 1.843868},
    {step: 38000, weight: 1.838590, biase: 8.989103, loss: 0.934523},
    {step: 39000, weight: 1.845167, biase: 9.046906, loss: 0.280605},
    {step: 42000, weight: 1.868906, biase: 9.203727, loss: 0.543921},
    {step: 44000, weight: 1.884815, biase: 9.293517, loss: 1.656933},
    {step: 46000, weight: 1.899734, biase: 9.373731, loss: 1.541220},
    {step: 47000, weight: 1.903859, biase: 9.410579, loss: 0.089207},
    {step: 49000, weight: 1.912148, biase: 9.478010, loss: 0.223917},
    {step: 50000, weight: 1.916875, biase: 9.509416, loss: 0.061809},
    {step: 52000, weight: 1.925799, biase: 9.564278, loss: 0.021264},
    {step: 58000, weight: 1.947244, biase: 9.693398, loss: 0.258275},
    {step: 60000, weight: 1.953030, biase: 9.727933, loss: 0.272920},
    {step: 62000, weight: 1.956538, biase: 9.759631, loss: 0.000717},
    {step: 65000, weight: 1.962933, biase: 9.800118, loss: 0.076489},
    {step: 70000, weight: 1.973023, biase: 9.850254, loss: 0.059660},
    {step: 71000, weight: 1.973791, biase: 9.858986, loss: 0.008883},
    {step: 72000, weight: 1.974514, biase: 9.866359, loss: 0.031093},
    {step: 74000, weight: 1.976858, biase: 9.881367, loss: 0.069978},
    {step: 75000, weight: 1.979205, biase: 9.889129, loss: 0.324244},
    {step: 76000, weight: 1.980034, biase: 9.895957, loss: 0.013150},
    {step: 79000, weight: 1.983944, biase: 9.913040, loss: 0.050212},
    {step: 80000, weight: 1.985615, biase: 9.918487, loss: 0.149008},
    {step: 82000, weight: 1.987593, biase: 9.927310, loss: 0.033373},
    {step: 83000, weight: 1.989391, biase: 9.930841, loss: 0.015324},
    {step: 85000, weight: 1.991143, biase: 9.938477, loss: 0.000583},
    {step: 86000, weight: 1.992260, biase: 9.941799, loss: 0.018758},
    {step: 89000, weight: 1.993532, biase: 9.949404, loss: 0.022769},
    {step: 90000, weight: 1.994008, biase: 9.952476, loss: 0.001096},
    {step: 93000, weight: 1.995104, biase: 9.958579, loss: 0.164151},
    {step: 94000, weight: 1.994988, biase: 9.960455, loss: 0.064549},
    {step: 95000, weight: 1.994645, biase: 9.962221, loss: 0.141880},
    {step: 97000, weight: 1.996176, biase: 9.966411, loss: 0.030475},
    {step: 99000, weight: 1.996749, biase: 9.970039, loss: 0.827832},
    {step: 103000, weight: 1.996411, biase: 9.975178, loss: 0.118822},
    {step: 105000, weight: 1.996013, biase: 9.978400, loss: 0.003990},
    {step: 107000, weight: 1.996478, biase: 9.980209, loss: 0.005261},
    {step: 108000, weight: 1.996121, biase: 9.982154, loss: 0.029384},
    {step: 110000, weight: 1.996871, biase: 9.984224, loss: 0.378355},
    {step: 111000, weight: 1.997841, biase: 9.984205, loss: 0.000201},
    {step: 112000, weight: 1.997259, biase: 9.984383, loss: 0.038807},
    {step: 115000, weight: 1.999126, biase: 9.985536, loss: 0.001268},
    {step: 118000, weight: 1.999309, biase: 9.987539, loss: 0.240573},
    {step: 120000, weight: 1.999459, biase: 9.989358, loss: 0.126177},
    {step: 124000, weight: 1.999904, biase: 9.992624, loss: 0.012471},
    {step: 125000, weight: 2.000758, biase: 9.993505, loss: 0.415042},
    {step: 126000, weight: 2.000272, biase: 9.994066, loss: 0.004883},
    {step: 127000, weight: 2.001750, biase: 9.994772, loss: 0.349193},
    {step: 128000, weight: 2.000233, biase: 9.994715, loss: 0.095621},
    {step: 129000, weight: 1.999458, biase: 9.995711, loss: 0.209863},
    {step: 133000, weight: 2.001397, biase: 9.994611, loss: 0.380113},
    {step: 135000, weight: 2.000516, biase: 9.995304, loss: 0.007389},
    {step: 136000, weight: 2.001387, biase: 9.995522, loss: 0.138725},
    {step: 137000, weight: 2.001863, biase: 9.996107, loss: 0.408672},
    {step: 140000, weight: 2.003131, biase: 9.996534, loss: 0.380810},
    {step: 141000, weight: 2.003186, biase: 9.996528, loss: 0.080168},
    {step: 143000, weight: 2.003042, biase: 9.996861, loss: 0.101759},
    {step: 144000, weight: 2.002077, biase: 9.996620, loss: 0.008910},
    {step: 145000, weight: 2.001487, biase: 9.997188, loss: 0.183505},
    {step: 149000, weight: 2.002328, biase: 10.000218, loss: 0.124783},
    {step: 152000, weight: 2.003114, biase: 9.998760, loss: 0.274057},
    {step: 155000, weight: 2.001805, biase: 10.000109, loss: 0.102807},
    {step: 156000, weight: 2.000535, biase: 9.999454, loss: 0.103248},
    {step: 158000, weight: 1.999893, biase: 10.000010, loss: 0.012405},
    {step: 162000, weight: 2.001430, biase: 10.000159, loss: 0.054872},
    {step: 165000, weight: 2.001673, biase: 10.000564, loss: 0.258632},
    {step: 168000, weight: 2.002947, biase: 10.002139, loss: 0.125357},
    {step: 169000, weight: 2.002424, biase: 10.002263, loss: 0.146642},
    {step: 173000, weight: 2.002144, biase: 10.001827, loss: 0.037285},
    {step: 180000, weight: 2.004706, biase: 10.000096, loss: 0.084742},
    {step: 181000, weight: 2.004286, biase: 10.001149, loss: 0.000772},
]

const dataSource = []
    
// const dataSource = [ 
//     {key: '1', step: 0, weight: 0.422631, biase: 0.115551, loss: 39.021523},
//     {key: '2', step: 1000, weight: 0.502552, biase: 0.689394, loss: 46.659107},   
// ];
  
  const columns = [{
    title: 'Step',
    dataIndex: 'step',
    key: 'step',
  }, {
    title: 'Weight',
    dataIndex: 'weight',
    key: 'weight',
  }, {
    title: 'Biase',
    dataIndex: 'biase',
    key: 'biase',
  }, {
    title: 'Loss',
    dataIndex: 'loss',
    key: 'loss'
  }];
  
  

class Demo1 extends Component{ 
    myRef = React.createRef();
    constructor(props) {
        super(props)
        this.state = {}
    }

    render(){
        return (
            <div id="container">
                <Row type="flex" justify="center" align="top">
                    <Col span={10}>
                        <div id="drawing" className="drawing"></div>
                        <Button onClick={this.sync}>sync</Button>
                        <Button onClick={this.async}>async</Button>
                    </Col>
                    <Col span={14}>
                        <Table className="table" dataSource={dataSource} columns={columns} />
                    </Col>
                </Row>
                
                
            </div>
        )    
    }
    
    componentDidMount() {
        let draw = SVG('drawing').width(500).height(700);
        let drawing = draw.group();
        drawing.move(-300,0);
        // let cx = drawing.cx();

        // /* 神经网络 */
        // let net = drawing.group();
        // let input = net.rect(100, 30).x(cx - 50).y(210).radius(5).fill('rgb(190, 120, 150)');
        // let output = net.rect(100, 30).x(cx - 50).y(10).radius(5).fill('rgb(190, 120, 150)');
        // let inputText = net.text('x').x(input.cx()).y(input.y());
        // let outputText = net.text('y').x(output.cx()).y(output.y());
        // let firstNodes = [];
        // for (let i = 0; i < 5; i++) {
        //     let node = net.circle(30).x(cx - 115 + i * 50).y(80).fill('rgb(150, 200, 230)');
        //     firstNodes.push(node);
        // }
        // let secondNodes = [];
        // for (let i = 0; i < 4; i++) {
        //     let node = net.circle(30).x(cx - 90 + i * 50).y(150).fill('rgb(150, 200, 230)');
        //     secondNodes.push(node);
        // }
        // /*  */
        // let firstPaths = [];
        // for (let i = 0; i < 4; i++) {
        //     let path = net.path(`
        //         M${input.cx()} ${input.cy()}
        //         L${secondNodes[i].cx()} ${secondNodes[i].cy()}
        //     `).fill('none').stroke({width: 1}).back()
        //     firstPaths.push(path);
        // }
        // let secondPaths = [];
        // for (let i = 0; i < 5; i++) {
        //     let path = net.path(`
        //         M${output.cx()} ${output.cy()}
        //         L${firstNodes[i].cx()} ${firstNodes[i].cy()}
        //     `).fill('none').stroke({width: 1}).back()
        //     secondPaths.push(path);
        // }
        // let interPaths = [];
        // for (let i = 0; i < 4; i++) {
        //     for (let j = 0; j < 5; j++) {
        //         let path = net.path(`
        //             M${secondNodes[i].cx()} ${secondNodes[i].cy()}
        //             L${firstNodes[j].cx()} ${firstNodes[j].cy()} 
        //         `).fill('none').stroke({width: 1}).back()
        //         interPaths.push(path);
        //     }
        // }
        // net.addClass('net')
        // net.move(-200, 100);
        // // let net2 = net.clone().move(100);
        // // net.scale(0.5);

        let left = drawing.group();
        let x1 = left.circle(40).x(100).y(100).fill('rgb(50,250,250)');
        let x1Text = left.text('x1').x(x1.x() + 10).y(x1.y() + 10);
        let x2 = left.circle(40).x(100).y(150).fill('rgb(50,250,250)');
        let x2Text = left.text('x2').x(x2.x() + 10).y(x2.y() + 10);
        let xRect = left.rect(50, 100).x(95).y(95).fill('transparent').stroke({width: 1.5, color: 'blue'})
        
        let matMul = left.circle(60).x(200).y(100).fill('rgb(0,100,200)');
        let matMulText = left.text('MatMulText').x(200).y(100 + 20);
        let add = left.circle(60).x(300).y(100).fill('rgb(0,100,200)');
        let addText = left.text('Add').x(300 + 10).y(100 + 20);
        let w = left.circle(40).x(200).y(0).fill('#fab');
        let wText = left.text('w').x(200 + 10).y(10);
        let b = left.circle(40).x(300).y(0).fill('#fab');
        let bText = left.text('b').x(300 + 10).y(10);
        let g1 = left.rect(20, 30).x(250).y(200).fill('#0fa');
        let gradient1Text = left.text('gradient').x(250).y(200);
        let g2 = left.rect(20, 30).x(350).y(200).fill('#0fa');
        let gradient2Text = left.text('gradient').x(350).y(200);

        let x1ToMatMul = left.path(`M${x1.cx()} ${x1.cy()} L${matMul.cx()} ${matMul.cy()}`).fill('none').stroke({width: 2}).back();
        
        let x2ToMatMul = left.path(`M${x2.cx()} ${x2.cy()} L${matMul.cx()} ${matMul.cy()}`).fill('none').stroke({width: 2}).back();
        let matMulToAdd = left.path(`M${matMul.cx()} ${matMul.cy()} L${add.cx()} ${add.cy()}`).fill('none').stroke({width: 2}).back();
        let wToMatMul = left.path(`M${w.cx()} ${w.cy()} L${matMul.cx()} ${matMul.cy()}`).fill('none').stroke({width: 2}).back();
        let bToAdd = left.path(`M${b.cx()} ${b.cy()} L${add.cx()} ${add.cy()}`).fill('none').stroke({width: 2}).back();
        let g1ToMatMul = left.path(`M${g1.cx()} ${g1.cy()} L${matMul.cx()} ${matMul.cy()}`).fill('none').stroke({width: 2}).back();
        let g2ToAdd = left.path(`M${g2.cx()} ${g2.cy()} L${add.cx()} ${add.cy()}`).fill('none').stroke({width: 2}).back();


        left.move(200, 200);
        left.scale(2);
        left.hide();

        let line = left.path(`M 100 70 L 800 70`).fill('none').stroke({width: 2, dasharray: '5 5'}).back();

         /* ps */
        let ps = drawing.group();
        let psRect = ps.rect(200, 100).x(500).y(0).radius(5).fill('rgb(200, 255, 255)');
        let psText = ps.text('ps/ w:0  b:0');
        psText.x(psRect.cx() - psText.bbox().width / 2).y(psRect.cy() - psText.bbox().height / 2);
        ps.addClass('ps');

        /* worker1 */
        let worker1 = drawing.group();
        let worker1Rect = worker1.rect(100, 50).x(500).y(150).radius(5).fill('rgb(200, 255, 255)');
        let worker1Text = worker1.text('worker1')
        worker1Text.x(worker1Rect.cx() - worker1Text.bbox().width / 2).y(worker1Rect.cy() - worker1Text.bbox().height / 2);
        worker1.addClass('worker1');
        worker1Rect.addClass('worker1Rect');

        /* worker2 */
        let worker2 = drawing.group();
        let worker2Rect = worker2.rect(100, 50).x(500).y(230).radius(5).fill('rgb(200, 255, 255)');
        let worker2Text = worker2.text('worker2')
        worker2Text.x(worker2Rect.cx() - worker2Text.bbox().width / 2).y(worker2Rect.cy() - worker2Text.bbox().height / 2);
        worker2.addClass('worker2');
        worker2Rect.addClass('worker2Rect');
        
        
        
        this.setState({
            drawing: drawing,
            // net: net,
            ps: ps,
            psRect: psRect,
            psText: psText,
            worker1: worker1,
            worker1Rect: worker1Rect,
            worker1Text: worker1Text,
            worker2: worker2,
            worker2Rect: worker2Rect,
            worker2Text: worker2Text,
            isSync: false,
        });
    }


    sync = () => {
        let that = this;

        const {drawing, psRect, worker1Rect, worker2Rect, wo, isSync} = this.state;
        
        let worker2Tops = drawing.path(`
            M ${worker2Rect.x()} ${worker2Rect.cy()}
            C ${worker2Rect.x() - 80} ${worker2Rect.cy() - 100}, ${psRect.x()-80} ${psRect.cy()+100}, ${psRect.x()} ${psRect.cy()} 
        `).fill('none').stroke({width: 1, color: 'transparent'}) 
        worker2Tops.marker('end', 5, 5 )
        worker2Tops.addClass('worker2Tops')

        let worker1Tops = drawing.path(`
            M ${worker1Rect.x()} ${worker1Rect.cy()}
            C ${worker1Rect.x() - 80} ${worker1Rect.cy() - 50}, ${psRect.x()-80} ${psRect.cy()+50}, ${psRect.x()} ${psRect.cy()} 
        `).fill('none').stroke({width: 1, color: 'transparent'}) 
        worker1Tops.marker('end', 5, 5 )
        worker1Tops.addClass('worker1Tops')

        let psToworker2 = drawing.path(`
            M ${psRect.x() + worker2Rect.width()} ${psRect.cy()} 
            C ${worker2Rect.x() + worker2Rect.width()+ 80} ${worker2Rect.cy() - 100}, ${psRect.x()+ worker2Rect.width()+80} ${psRect.cy()+100}, ${worker2Rect.x() + worker2Rect.width()} ${worker2Rect.cy()}
        `).fill('none').stroke({width: 1, color: 'transparent'}) 
        psToworker2.marker('end', 5, 5 )
        psToworker2.addClass('psToworker2')

        let psToworker1 = drawing.path(`
            M ${psRect.x() + worker2Rect.width() + 10} ${psRect.cy()} 
            C ${worker1Rect.x() + worker1Rect.width() + 80} ${worker1Rect.cy() - 50}, ${psRect.x() + worker1Rect.width()+80} ${psRect.cy()+50},${worker1Rect.x() + worker1Rect.width()} ${worker1Rect.cy()}
        `).fill('none').stroke({width: 1, color: 'transparent'}) 
        psToworker1.marker('end', 5, 5 )
        psToworker1.addClass('psToworker1')

        let rect1 = drawing.rect(5,5)
        rect1.addClass('rect1').fill('#48b');
        let rect2 = drawing.rect(5,5)
        rect2.addClass('rect2').fill('#ff0');

        
        let loopCount = 0;
        let path = anime.path('.worker2Tops')
        let a1 = anime({
            targets: '.rect1',
            translateX: path('x'),
            translateY: path('y'),
            rotate: path('angle'),
            easing: 'linear',
            duration: 2000,
            loopComplete: function() {
                if (a2.completed == true) {
                    window.setTimeout(() => {
                        data[loopCount].key = `${loopCount}`;
                        dataSource.push(data[loopCount]);
                    that.state.psText.remove();
                    let psText = drawing.text(`ps/ w: ${data[loopCount].weight} b: ${data[loopCount].biase}`);
                    psText.x(psRect.cx() - psText.bbox().width / 2).y(psRect.cy() - psText.bbox().height / 2);
                    that.setState({psText: psText});
                    loopCount++;
                    if (loopCount >= data.length) {
                        console.log(loopCount);
                        a2.pause();
                        a1.pause();
                        alert('task finished');
                        return;
                    }

                    let circle1 = drawing.circle(10).fill('#f02')
                    circle1.addClass('circle1');
                    let circle2 = drawing.circle(10).fill('#f02')
                    circle2.addClass('circle2');

                    path = anime.path('.psToworker2')
                    anime({
                        targets: '.circle1',
                        translateX: path('x'),
                        translateY: path('y'),
                        rotate: path('angle'),
                        easing: 'linear',
                        duration: 2000,
                    });
                    path = anime.path('.psToworker1')
                    anime({
                        targets: '.circle2',
                        translateX: path('x'),
                        translateY: path('y'),
                        rotate: path('angle'),
                        easing: 'linear',
                        duration: 2000,
                        // loop: true,
                        loopComplete: function() {
                            anime.set('.worker2Rect', {
                                width: 0
                                });
                            let a3 = anime({
                                targets: '.worker2Rect',
                                width: 100, // -> from '28px' to '100%',
                                easing: 'easeInOutQuad',
                                duration: 2000 + anime.random(-1000, 1000),
                                loopComplete: function() {
                                    // if (a4.completed == true) {
                                        a1.restart();
                                        // a2.restart();
                                    //     loopCount++;
                                    // }
                                }
                                });
                    
                            anime.set('.worker1Rect', {
                                width: 0
                                });
                            let a4 = anime({
                                targets: '.worker1Rect',
                                width: 100, // -> from '28px' to '100%',
                                easing: 'easeInOutQuad',
                                duration: 2000 + anime.random(-1000, 1000),
                                loopComplete: function() {
                                    // if (a3.completed == true) {
                                        // a1.restart();
                                    a2.restart();
                                    //     loopCount++;
                                    // }
                                }
                                });
                            
                        }
                    });
                }, 200)
                } //if
            }
          });
        path = anime.path('.worker1Tops')
        let a2 = anime({
            targets: '.rect2',
            translateX: path('x'),
            translateY: path('y'),
            rotate: path('angle'),
            easing: 'linear',
            duration: 2000,
            // delay: (i) => {i * 2000},
            // loop: true,
            loopComplete: function() {
                // psText = psText
                if (a1.completed == true) {
                    window.setTimeout(() => {
                        data[loopCount].key = `${loopCount}`;
                        dataSource.push(data[loopCount]);
                    that.state.psText.remove();
                    let psText = drawing.text(`ps/ w: ${data[loopCount].weight} b: ${data[loopCount].biase}`);
                    psText.x(psRect.cx() - psText.bbox().width / 2).y(psRect.cy() - psText.bbox().height / 2);
                    that.setState({psText: psText});
                    loopCount++;
                    if (loopCount >= data.length) {
						console.log("TCL: Demo1 -> sync -> loopCount", loopCount)
                        a2.pause();
                        a1.pause();
                        alert('task finished');
                        return;
                    }

                    let circle1 = drawing.circle(10).fill('#f02')
                    circle1.addClass('circle1');
                    let circle2 = drawing.circle(10).fill('#f02')
                    circle2.addClass('circle2');

                    path = anime.path('.psToworker2')
                    anime({
                        targets: '.circle1',
                        translateX: path('x'),
                        translateY: path('y'),
                        rotate: path('angle'),
                        easing: 'linear',
                        duration: 2000,
                    });
                    path = anime.path('.psToworker1')
                    anime({
                        targets: '.circle2',
                        translateX: path('x'),
                        translateY: path('y'),
                        rotate: path('angle'),
                        easing: 'linear',
                        duration: 2000,
                        // loop: true,
                        loopComplete: function() {
                            anime.set('.worker2Rect', {
                                width: 0
                                });
                            let a3 = anime({
                                targets: '.worker2Rect',
                                width: 100, // -> from '28px' to '100%',
                                easing: 'easeInOutQuad',
                                duration: 2000 + anime.random(-1000, 1000),
                                loopComplete: function() {
                                    // if (a4.completed == true) {
                                        a1.restart();
                                        // a2.restart();
                                    //     loopCount++;
                                    // }
                                }
                                });
                    
                            anime.set('.worker1Rect', {
                                width: 0
                                });
                            let a4 = anime({
                                targets: '.worker1Rect',
                                width: 100, // -> from '28px' to '100%',
                                easing: 'easeInOutQuad',
                                duration: 2000 + anime.random(-1000, 1000),
                                loopComplete: function() {
                                    // if (a3.completed == true) {
                                        // a1.restart();
                                        a2.restart();
                                    //     loopCount++;
                                    // }
                                }
                                });
                            
                        }
                    });
                }, 200)
                } //if

                
            }
          });
        // console.log('sync finished')
        if (!isSync) {

        }
        this.setState({a1: a1, a2: a2})
    }

    async = () => {
        let that = this;
        const {drawing, ps, psRect, worker1Rect, worker2Rect} = this.state;
        
        let worker2Tops = drawing.path(`
            M ${worker2Rect.x()} ${worker2Rect.cy()}
            C ${worker2Rect.x() - 80} ${worker2Rect.cy() - 100}, ${psRect.x()-80} ${psRect.cy()+100}, ${psRect.x()} ${psRect.cy()} 
        `).fill('none').stroke({width: 1, color: 'transparent'}) 
        worker2Tops.marker('end', 5, 5 )
        worker2Tops.addClass('worker2Tops')

        let worker1Tops = drawing.path(`
            M ${worker1Rect.x()} ${worker1Rect.cy()}
            C ${worker1Rect.x() - 80} ${worker1Rect.cy() - 50}, ${psRect.x()-80} ${psRect.cy()+50}, ${psRect.x()} ${psRect.cy()} 
        `).fill('none').stroke({width: 1, color: 'transparent'}) 
        worker1Tops.marker('end', 5, 5 )
        worker1Tops.addClass('worker1Tops')

        let psToworker2 = drawing.path(`
            M ${psRect.x() + worker2Rect.width()} ${psRect.cy()} 
            C ${worker2Rect.x() + worker2Rect.width()+ 80} ${worker2Rect.cy() - 100}, ${psRect.x()+ worker2Rect.width()+80} ${psRect.cy()+100}, ${worker2Rect.x() + worker2Rect.width()} ${worker2Rect.cy()}
        `).fill('none').stroke({width: 1, color: 'transparent'}) 
        psToworker2.marker('end', 5, 5 )
        psToworker2.addClass('psToworker2')

        let psToworker1 = drawing.path(`
            M ${psRect.x() + worker2Rect.width() + 10} ${psRect.cy()} 
            C ${worker1Rect.x() + worker1Rect.width() + 80} ${worker1Rect.cy() - 50}, ${psRect.x() + worker1Rect.width()+80} ${psRect.cy()+50},${worker1Rect.x() + worker1Rect.width()} ${worker1Rect.cy()}
        `).fill('none').stroke({width: 1, color: 'transparent'}) 
        psToworker1.marker('end', 5, 5 )
        psToworker1.addClass('psToworker1')

        let rect1 = drawing.rect(5,5)
        rect1.addClass('rect1').fill('#48b');
        let rect2 = drawing.rect(5,5)
        rect2.addClass('rect2').fill('#ff0');

        let loopCount = 0;
        let path = anime.path('.worker2Tops')
        let a1 = anime({
            targets: '.rect1',
            translateX: path('x'),
            translateY: path('y'),
            rotate: path('angle'),
            easing: 'linear',
            duration: 2000,
            loopComplete: function() {
                window.setTimeout(() => {
                    data[loopCount].key = `${loopCount}`;
                    dataSource.push(data[loopCount]);

                    that.state.psText.remove();
                    let psText = drawing.text(`ps/ w: ${data[loopCount].weight} b: ${data[loopCount].biase}`);
                    psText.x(psRect.cx() - psText.bbox().width / 2).y(psRect.cy() - psText.bbox().height / 2);
                    that.setState({psText: psText});
                    loopCount++;
                    if (loopCount >= data.length) {
						console.log("TCL: Demo1 -> sync -> loopCount", loopCount)
                        a2.pause();
                        a1.pause();
                        alert('task finished');
                        return;
                    }

                    let circle1 = drawing.circle(10).fill('#fa2')
                    circle1.addClass('circle1');
                    path = anime.path('.psToworker2')
                    anime({
                        
                        targets: '.circle1',
                        translateX: path('x'),
                        translateY: path('y'),
                        rotate: path('angle'),
                        easing: 'linear',
                        duration: 2000,
                        loopComplete: function() {
                            anime.set('.worker2Rect', {
                                width: 0
                                });
                            let a4 = anime({
                                targets: '.worker2Rect',
                                width: 100, // -> from '28px' to '100%',
                                easing: 'easeInOutQuad',
                                duration: 2000 + anime.random(-1000, 1000),
                                loopComplete: function() {
                                    a1.restart();
                                }
                                });
                        }
                    });
                }, 400)
            }
          });
        path = anime.path('.worker1Tops')
        let a2 = anime({
            targets: '.rect2',
            translateX: path('x'),
            translateY: path('y'),
            rotate: path('angle'),
            easing: 'linear',
            duration: 2000,
            // delay: (i) => {i * 2000},
            // loop: true,
            loopComplete: function() {
                window.setTimeout(() => {
                    data[loopCount].key = `${loopCount}`;
                    dataSource.push(data[loopCount]);

                    that.state.psText.remove();
                    let psText = drawing.text(`ps/ w: ${data[loopCount].weight} b: ${data[loopCount].biase}`);
                    psText.x(psRect.cx() - psText.bbox().width / 2).y(psRect.cy() - psText.bbox().height / 2);
                    that.setState({psText: psText});
                    loopCount++;
                    if (loopCount >= data.length) {
						console.log("TCL: Demo1 -> sync -> loopCount", loopCount)
                        a2.pause();
                        a1.pause();
                        alert('task finished');
                        return;
                    }

                    let circle2 = drawing.circle(10).fill('#f02')
                    circle2.addClass('circle2');
                    path = anime.path('.psToworker1')
                    anime({
                        targets: '.circle2',
                        translateX: path('x'),
                        translateY: path('y'),
                        rotate: path('angle'),
                        easing: 'linear',
                        duration: 2000,
                        // loop: true,
                        loopComplete: function() {
                            anime.set('.worker1Rect', {
                                width: 0
                                });
                            let a3 = anime({
                                targets: '.worker1Rect',
                                width: 100, // -> from '28px' to '100%',
                                easing: 'easeInOutQuad',
                                duration: 2000 + anime.random(-1000, 1000),
                                loopComplete: function() {
                                    a2.restart();
                                }
                                });
                        }
                    });
                }, 400)
            }
          });
        this.setState({a1: a1, a2: a2})
    }
    
    
}
export default withRouter(Demo1);
