import React, { Component } from 'react';
import './Demo1.css';
import anime from 'animejs';
import * as SVG from 'svg.js';

class Demo1 extends Component{ 
    myRef = React.createRef();
    constructor(props) {
        super(props)
        this.state = {}
        console.log(this)
    }

    render(){
        return (
            <div id="container">
                <div className="wrapper"></div>
                <button onClick={this.look}>look</button>
                <button onClick={this.play}>play</button>
                <button onClick={this.sync}>sync</button>
            </div>
            )    
    }
    
    componentDidMount() {
        let drawing = SVG('container').width(800).height(500);
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
        net.addClass('net')
        net.move(-200, 100);
        // let net2 = net.clone().move(100);
        // net.scale(0.5);

        /* ps */
        let ps = drawing.group();
        let psRect = ps.rect(100, 50).x(400).y(50).radius(5).fill('rgb(200, 255, 255)');
        let psText = ps.text('ps');
        psText.x(psRect.cx() - psText.bbox().width / 2).y(psRect.cy() - psText.bbox().height / 2);
        ps.addClass('ps');

        /* worker1 */
        let worker1 = drawing.group();
        let worker1Rect = worker1.rect(100, 50).x(400).y(150).radius(5).fill('rgb(200, 255, 255)');
        let worker1Text = worker1.text('worker1')
        worker1Text.x(worker1Rect.cx() - worker1Text.bbox().width / 2).y(worker1Rect.cy() - worker1Text.bbox().height / 2);
        worker1.addClass('worker1');
        worker1Rect.addClass('worker1Rect');

        /* worker2 */
        let worker2 = drawing.group();
        let worker2Rect = worker2.rect(100, 50).x(400).y(230).radius(5).fill('rgb(200, 255, 255)');
        let worker2Text = worker2.text('worker2')
        worker2Text.x(worker2Rect.cx() - worker2Text.bbox().width / 2).y(worker2Rect.cy() - worker2Text.bbox().height / 2);
        worker2.addClass('worker2');
        worker2Rect.addClass('worker2Rect');
            // let timeline = anime.timeline({
            //     easing: 'easeOutExpo',
            //     duration: 750
            // })
            // .add({
            //     targets: 'net',
            //     translateX: 250,
            // });
        
        
        
        
        this.setState({
            drawing: drawing,
            net: net,
            ps: ps,
            psRect: psRect,
            worker1: worker1,
            worker1Rect: worker1Rect,
            worker2: worker2,
            worker2Rect: worker2Rect
        });
    }

    sync = () => {

        const {drawing, ps, psRect, worker1Rect, worker2Rect} = this.state;
        
        let path1 = drawing.path(`
            M ${worker2Rect.x()} ${worker2Rect.cy()}
            C ${worker2Rect.x() - 80} ${worker2Rect.cy() - 100}, ${psRect.x()-80} ${psRect.cy()+100}, ${psRect.x()} ${psRect.cy()} 
        `).fill('none').stroke({width: 1, color: '#BF7E96'}) 
        path1.marker('end', 5, 5 )
        path1.addClass('path1')

        let path2 = drawing.path(`
            M ${worker1Rect.x()} ${worker1Rect.cy()}
            C ${worker1Rect.x() - 80} ${worker1Rect.cy() - 50}, ${psRect.x()-80} ${psRect.cy()+50}, ${psRect.x()} ${psRect.cy()} 
        `).fill('none').stroke({width: 1, color: '#BF7E96'}) 
        path2.marker('end', 5, 5 )
        path2.addClass('path2')

        let path3 = drawing.path(`
            M ${psRect.x() + worker2Rect.width()} ${psRect.cy()} 
            C ${worker2Rect.x() + worker2Rect.width()+ 80} ${worker2Rect.cy() - 100}, ${psRect.x()+ worker2Rect.width()+80} ${psRect.cy()+100}, ${worker2Rect.x() + worker2Rect.width()} ${worker2Rect.cy()}
        `).fill('none').stroke({width: 1, color: '#BF7E96'}) 
        path3.marker('end', 5, 5 )
        path3.addClass('path3')

        let path4 = drawing.path(`
            M ${psRect.x() + worker2Rect.width()} ${psRect.cy()} 
            C ${worker1Rect.x() + worker1Rect.width() + 80} ${worker1Rect.cy() - 50}, ${psRect.x() + worker1Rect.width()+80} ${psRect.cy()+50},${worker1Rect.x() + worker1Rect.width()} ${worker1Rect.cy()}
        `).fill('none').stroke({width: 1, color: '#BF7E96'}) 
        path4.marker('end', 5, 5 )
        path4.addClass('path4')

        let rect1 = drawing.rect(5,5)
        rect1.addClass('rect1');
        let rect2 = drawing.rect(5,5)
        rect2.addClass('rect2');

        let circle1 = drawing.circle(10).fill('#f02')
        circle1.addClass('circle1');
        let circle2 = drawing.circle(10).fill('#f02')
        circle2.addClass('circle2');
        
        let path = anime.path('.path1')
        anime({
            targets: '.rect1',
            translateX: path('x'),
            translateY: path('y'),
            rotate: path('angle'),
            easing: 'linear',
            duration: 2000,
            loop: true
          });
        path = anime.path('.path2')
        anime({
            targets: '.rect2',
            translateX: path('x'),
            translateY: path('y'),
            rotate: path('angle'),
            easing: 'linear',
            duration: 2000,
            loop: true
          });
        path = anime.path('.path3')
        anime({
            targets: '.circle1',
            translateX: path('x'),
            translateY: path('y'),
            rotate: path('angle'),
            easing: 'linear',
            duration: 2000,
            loop: true
        });
        path = anime.path('.path4')
        anime({
            targets: '.circle2',
            translateX: path('x'),
            translateY: path('y'),
            rotate: path('angle'),
            easing: 'linear',
            duration: 2000,
            loop: true
        });

        var tl = anime.timeline({
            loop: true
        });
        anime.set('.worker2Rect', {
            width: 0
            });
        tl.add({
            targets: '.worker2Rect',
            width: 100, // -> from '28px' to '100%',
            easing: 'easeInOutQuad',
            // direction: 'alternate',
            loop: true
            });

        anime.set('.worker1Rect', {
            width: 0
            });
        tl.add({
            targets: '.worker1Rect',
            width: 100, // -> from '28px' to '100%',
            easing: 'easeInOutQuad',
            // direction: 'alternate',
            loop: true
            });

        // worker2Rect.animate().attr({ width: 0 }).animate(2000, '>', 0).attr({ width: 100 , fill: '#f03'}).loop()
    }

    async = () => {

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
