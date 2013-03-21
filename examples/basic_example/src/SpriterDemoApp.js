/****************************************************************************
 Copyright (c) 2010-2012 cocos2d-x.org
 Copyright (c) 2008-2010 Ricardo Quesada
 Copyright (c) 2011      Zynga Inc.

 http://www.cocos2d-x.org

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/

var SpriterDemoLayer = cc.Layer.extend({
    isMouseDown:false,
    sprite:null,

    init:function () {
        this._super();

        // ask director the window size
        var size = cc.Director.getInstance().getWinSize();
		
		// Create a SpriterX instance from file (monster)
		var monster = cc.SpriterX.create(monsterSCML);
		monster.setPosition(new cc.p(450.0,50.0));
		monster.playNext();
		this.addChild(monster);
		
		monster = cc.SpriterX.create(monsterSCML);
		monster.setPosition(new cc.p(800.0,50.0));
		this.addChild(monster);
		
		// Create a SpriterX instance from file (hero)
		var hero = cc.SpriterX.create(heroSCML);
		hero.setPosition(new cc.p(100.0,50.0));
		hero.playNext();
		this.addChild(hero);
		
		hero = cc.SpriterX.create(heroSCML);
		hero.setPosition(new cc.p(230.0,50.0));
		this.addChild(hero);

        return true;
    }

});

var SpriterDemoScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new SpriterDemoLayer();
        this.addChild(layer);
        layer.init();
    }
});
