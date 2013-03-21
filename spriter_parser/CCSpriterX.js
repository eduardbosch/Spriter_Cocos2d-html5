//------------------------------------------------------------------------
//
//	CCSpriterX : KickStarter project Spriter renderer for cocos2d-x.
//
//	Spriter website : http://www.kickstarter.com/projects/539087245/spriter
// 
//	Port of James Hui CCSpriteX from C++ to JS http://jameshui.com
//
//  @Author    : Eduard Bosch Bertran - eduardboschbertran@gmail.com
//  @Date      : 13-02-2013
//  @LastUpdate: 14-02-2013
//
//------------------------------------------------------------------------

ValueHelper = {
	getInt: function(val,defVal){
		return val===undefined ? 
					defVal :
					parseInt(val);
	},
	getFloat: function(val,defVal){
		return val===undefined ? 
					defVal :
					parseFloat(val);
	},
	getString: function(val,defVal){
		return val===undefined ? 
					defVal :
					val;
	}
}

var SCMLHelper =
{

	///////////////////////////////////////////////////////////////////////////////////

	File: cc.Class.extend({
		id    :  0,
		name  :  "",
		width : 0.0,
		height: 0.0,
		
		sprite: undefined,

		
		ctor: function()
		{
			this.id     =   0;
			this.name   =  "";
			this.width  = 0.0;
			this.height = 0.0;
		
			this.sprite = undefined;
		},
		init: function($node)
		{
			if ($node!==undefined && $node.length>0)
			{
				this.id     = ValueHelper.getInt   ($node.attr("id")    ,   0);
				this.name   = ValueHelper.getString($node.attr("name")  ,  "");
				this.width  = ValueHelper.getFloat ($node.attr("width") , 0.0);
				this.height = ValueHelper.getFloat ($node.attr("height"), 0.0);
	
				if (this.name!==undefined && this.name.length>0)
				{
					this.sprite = cc.Sprite.create(this.name);
				}
			}
	
		}
	}),

	///////////////////////////////////////////////////////////////////////////////////

	Folder: cc.Class.extend({
		mId   :  0,
		mName : "",
		mFiles: [],
		
		
		ctor: function()
		{
			this.mId    =  0;
			this.mName  = "";
		
			this.mFiles = [];
		},
		getFileCount: function()
		{
			return this.mFiles.length;	
		},
		getFile: function(index)
		{
			if (index < this.getFileCount())
				return this.mFiles[index];
	
			return undefined;
		},
		init: function($node)
		{
			if ($node!==undefined && $node.length>0)
			{
				this.mId     = ValueHelper.getInt   ($node.attr("id")    ,   0);
				this.mName   = ValueHelper.getString($node.attr("name")  ,  "");
				
				$node.children().each( $.proxy(function(k,v){
					var $child = $(v);
					
					var file = new SCMLHelper.File();
					file.init($child);
	
					this.mFiles.push(file);
				},this));
			}
		}
	}),

	///////////////////////////////////////////////////////////////////////////////////

	ObjectRef: cc.Class.extend({
		id:       0,
		timeline: 0,
		key:      0,
		z_index:  0,
		
		
		ctor: function()
		{
			this.id       = 0;
			this.timeline = 0;
			this.key      = 0;
			this.z_index  = 0;
		},
		init: function($node)
		{
			if ($node!==undefined && $node.length>0)
			{
				this.id       = ValueHelper.getInt($node.attr("id")      ,   0);
				this.timeline = ValueHelper.getInt($node.attr("timeline"),   0);
				this.key      = ValueHelper.getInt($node.attr("key")     ,   0);
				this.z_index  = ValueHelper.getInt($node.attr("z_index") ,   0);
			}
		}
	}),


	///////////////////////////////////////////////////////////////////////////////////

	Object: cc.Class.extend({
		folder:    0,
		file:      0,
		x:       0.0,
		y:       0.0,
		angle:   0.0,
		pivot_x: 0.0,
		pivot_y: 1.0,
		z_index:   0,

		sprite: undefined,
		
		
		ctor: function()
		{
			this.folder  = 0;
			this.file    = 0;
			this.x       = 0.0;
			this.y       = 0.0;
			this.angle   = 0.0;
			this.pivot_x = 0.0;
			this.pivot_y = 1.0;
			this.z_index = 0;
			
			this.sprite = undefined;
		},
		init: function($node, /*CCSpriterX*/ animator)
		{
			var scaleFactor = cc.Director.getInstance().getContentScaleFactor();
			
			if ($node!==undefined && $node.length>0)
			{
				this.folder   = ValueHelper.getInt  ($node.attr("folder") ,   0);
				this.file     = ValueHelper.getInt  ($node.attr("file")   ,   0);
				
				this.x        = ValueHelper.getFloat($node.attr("x")      , 0.0);
				this.y        = ValueHelper.getFloat($node.attr("y")      , 0.0);
				this.angle    = ValueHelper.getFloat($node.attr("angle")  , 0.0);
				this.pivot_x  = ValueHelper.getFloat($node.attr("pivot_x"), 0.0);
				this.pivot_y  = ValueHelper.getFloat($node.attr("pivot_y"), 1.0); // Note ebosch: Spriter does not write pivot_y if its equal to 1.0 and not 0.0!!
				
				this.z_index  = ValueHelper.getInt  ($node.attr("z_index"),   0);
				
				this.sprite   = animator.getSprite(this.folder, this.file);
			}
		}
	}),


	///////////////////////////////////////////////////////////////////////////////////

	Key: cc.Class.extend({
		mId:     0,
		mTime: 0.0,
		mSpinCounterClockwise: true,
		
		mObjects: [],
		mObjectRefs: [],
		
		ctor: function()
		{
			this.mId   =   0;
			this.mTime = 0.0;
			this.mSpinCounterClockwise = true,
		
			this.mObjects    = [];
			this.mObjectRefs = [];
		},
		getObjectRefCount: function()
		{
			return this.mObjectRefs.length;	
		},
		getObjectRef: function(index)
		{
			if (index < this.getObjectRefCount())
			{
				return this.mObjectRefs[index];
			}
	
			return undefined;
		},
		getObjectCount: function()
		{
			return this.mObjects.length;
		},
		getObject: function(index)
		{
			if (index < this.getObjectCount())
			{
				return this.mObjects[index];
			}
	
			return undefined;	
		},
		getTime: function()
		{
			return this.mTime;
		},
		isSpinCounterClockwise: function()
		{
			return this.mSpinCounterClockwise;	
		},
		init: function($node, /*CCSpriterX*/ animator)
		{
			if ($node!==undefined && $node.length>0)
			{
				this.mId   = ValueHelper.getInt  ($node.attr("id")  ,    0);
				
				this.mTime = ValueHelper.getFloat($node.attr("time"),  0.0) * 0.001;
				this.mSpinCounterClockwise 
				           = ValueHelper.getInt ($node.attr("spin"), 0) !== -1;

				$node.children().each( $.proxy(function(k,v){
					var $child = $(v);
					var tagName = $child.prop("tagName");
	
					if (tagName==="object_ref")
					{
						var ref = new SCMLHelper.ObjectRef();
						ref.init($child);
	
						this.mObjectRefs.push(ref);
					}
					else if (tagName==="object")
					{
						var obj = new SCMLHelper.Object();
						obj.init($child, animator);
	
						this.mObjects.push(obj);
					}
					else
					{
						cc.Log("Tag name '"+tagName+"' not supported.");
					}
				},this));
			}
		}
	}),


	///////////////////////////////////////////////////////////////////////////////////
	
	Timeline: cc.Class.extend({
		mId: 0,
		mKeyframes: [],
		
		
		ctor: function()
		{
			this.mId  = 0;
			
			this.mKeyframes = [];
		},
		getKeyframeCount: function()
		{
			return this.mKeyframes.length;
		},
		getKeyframe: function(index)
		{
			if (index < this.getKeyframeCount())
			{
				return this.mKeyframes[index];
			}
	
			return undefined;
		},
		init: function($node, /*CCSpriterX*/ animator)
		{
			if ($node!==undefined && $node.length>0)
			{
				this.mId   = ValueHelper.getInt($node.attr("id"), 0);
	
				$node.children().each( $.proxy(function(k,v){
					var $child = $(v);
					
					var keyframe = new SCMLHelper.Key();
					keyframe.init($child, animator);

					this.mKeyframes.push(keyframe);
				},this));
			}
	
		}
	}),

	///////////////////////////////////////////////////////////////////////////////////

	Animation: cc.Class.extend({
		mId:          0,
		mName:       "",
		mLength:    0.0,
		mLooping: false,
		mDone:    false,

		mMainline: undefined,
		mCurrKeyframe:     0,

		mTimelines: [],

		mTimer: 0.0,

		mPosition: undefined,
		
		
		ctor: function()
		{
			this.mId      = 0;
			this.mName    = "";
			this.mLength  = 0.0;
			this.mLooping = false;
			this.mDone    = false;
			
			this.mMainline     = undefined;
			this.mCurrKeyframe = 0;
			
			this.mTimelines = [];
			
			this.mTimer = 0.0;
			
			this.mPosition = new cc.p();
		},
		init: function($node, /*CCSpriterX*/ animator)
		{
			if ($node!==undefined && $node.length>0)
			{
				this.mId   = ValueHelper.getInt   ($node.attr("id")  ,   0);
				this.mName = ValueHelper.getString($node.attr("name"),  "");
	
				this.mLength = ValueHelper.getFloat($node.attr("length") , 0.0) * 0.001;
	
				//var looping = $node.attr("looping");		// was set to "false" in alpha, but in fact looping all the time
				this.mLooping = true;
	
				$node.children().each( $.proxy(function(k,v){
					var $child = $(v);
					var tagName = $child.prop("tagName");
					
					if (tagName==="mainline")						// 1 mainline only
					{
						this.mMainline = new SCMLHelper.Timeline();
						this.mMainline.init($child, animator);
					}
					else if (tagName==="timeline")
					{
						var timeline = new SCMLHelper.Timeline();
						timeline.init($child, animator);
	
						this.mTimelines.push(timeline);
					}
					else
					{
						cc.Log("Tag name '"+tagName+"' not supported.");
					}
				},this));
			}
	
		},
		isDone: function()
		{
			return this.mDone;
		},
		restart: function()
		{
			this.mDone         = false;
			this.mTimer        = 0;
			this.mCurrKeyframe = 0;
		},
		update: function(dt)
		{
			this.mTimer += dt;
			if (this.mTimer >= this.mLength)
			{
				this.mDone = true;
	
				this.restart();			// always looping for now
			}
			
			var count    = this.mMainline.getKeyframeCount();
			var keyframe = this.mMainline.getKeyframe(this.mCurrKeyframe);
			var currTime = keyframe.getTime();
	
			var keyframeNext = undefined;
	
			var next = this.mCurrKeyframe+1;
	
			if (next > count-1)		// looping
			{
				next = 0;
			}
		
			keyframeNext = this.mMainline.getKeyframe(next);
			
			if (keyframeNext!==undefined)
			{
				var nextTime = keyframeNext.getTime();
				if (next === 0)
				{
					nextTime = this.mLength;
				}
	
				if (this.mTimer >= nextTime)
				{
					this.mCurrKeyframe = next;
	
					keyframe = keyframeNext;
					currTime = keyframe.getTime();
	
					next = this.mCurrKeyframe+1;
					if (next > count-1)				// looping
					{
						next = 0;
					}
						
					keyframeNext = this.mMainline.getKeyframe(next);
					if (keyframeNext === undefined)
					{
						return;
					}
	
					nextTime = keyframeNext.getTime();
					if (next === 0)
					{
						nextTime = this.mLength;
					}
						
				}
	
	
				var t = (this.mTimer-currTime)/(nextTime-currTime);
	
				var countObj = keyframe.getObjectRefCount();
				for (var i=0;i<countObj;++i)
				{
					var ref     = keyframe.getObjectRef(i);
				
					var refNext = keyframeNext.getObjectRef(i);
	
					if (ref!==undefined && refNext!==undefined)
					{
	
						var keyRef = this.mTimelines[ref.timeline].getKeyframe(ref.key);
						var obj    = keyRef.getObject(0);									// should be only 1 object
	
						var keyRefNext = this.mTimelines[refNext.timeline].getKeyframe(refNext.key);
						var objNext    = keyRefNext.getObject(0);
	
						var x     = obj.x+(objNext.x-obj.x)*t;
						var y     = obj.y+(objNext.y-obj.y)*t;
						var angle = objNext.angle-obj.angle;
						if (keyRef.isSpinCounterClockwise())
						{
							if (angle < 0)
							{
								angle = (objNext.angle+360)-obj.angle;
							}
						}
						else
						{
							if (angle > 0)
							{
								angle = (objNext.angle-360)-obj.angle;
							}
						}
	
						if (ref.timeline !== refNext.timeline)	
						{
							t = 0;
						}
	
						angle = obj.angle+(angle)*t;
	
						if (angle >= 360)
						{
							angle -= 360;
						}
	
						var px = obj.pivot_x+(objNext.pivot_x-obj.pivot_x)*t;
						var py = obj.pivot_y+(objNext.pivot_y-obj.pivot_y)*t;
	
						obj.sprite.setPosition(new cc.p(x, y));
						obj.sprite.setRotation(-angle);
						obj.sprite.setAnchorPoint(new cc.p(px, py));
					}
				}
			}
		},
		render: function()
		{
			var keyframe = this.mMainline.getKeyframe(this.mCurrKeyframe);
	
			var count = keyframe.getObjectRefCount();
			for (var i=0;i<count;i++)
			{
				var ref = keyframe.getObjectRef(i);
	
				if (ref!==undefined)
				{
					var keyRef = this.mTimelines[ref.timeline].getKeyframe(ref.key);
					var obj = keyRef.getObject(0);									// should be only 1 object
					obj.sprite.visit();			
				}
			}
		}
	}),


	///////////////////////////////////////////////////////////////////////////////////

	Entity: cc.Class.extend({
		mId:    0,
		mName: "",

		mAnimations: [],

		mCurrAnimation: 0,
		
		
		ctor: function()
		{
			this.mId      = 0;
			this.mName    = "";
			
			this.mAnimations    = [];
			
			this.mCurrAnimation = 0;
		},
		update: function(dt)
		{
			var animation = this.mAnimations[this.mCurrAnimation];
			animation.update(dt);
		},
		render: function()
		{
			var animation = this.mAnimations[this.mCurrAnimation];
			animation.render();
		},
		nextAnimation: function()
		{
			this.mCurrAnimation++;
			if (this.mCurrAnimation >= this.mAnimations.length)
			{
				this.mCurrAnimation = 0;
			}
	
			var animation = this.mAnimations[this.mCurrAnimation];
			animation.restart();
		},
		setId: function(id)
		{
			this.mId = id;
		},
		setName: function(name)
		{
			this.mName = name;
		},
		addAnimation: function(/*Animation*/ animation)
		{
			this.mAnimations.push(animation);
		}
	})

}

///////////////////////////////////////////////////////////////////////////////////


cc.SpriterX = cc.Node.extend({
	mFolders:  [],
	mEntities: [],

	mCurrEntity: 0,
	
	ctor: function()
	{
		this.mFolders = [];
		this.mEntities = [];
		
		this.mCurrEntity = 0;
	},
	update: function(dt)
	{
		if (dt > 0.0167)
		{
			dt = 0.0167;
		}
	
		var entity = this.mEntities[this.mCurrEntity];
		entity.update(dt);
	},
	draw: function()
	{
		var entity = this.mEntities[this.mCurrEntity];
		entity.render();
	},
	playNext: function()
	{
		var entity = this.mEntities[this.mCurrEntity];
		entity.nextAnimation();
	},
	getSprite: function(folderId,fileId)
	{
		if (folderId < this.mFolders.length)
		{
			var folder = this.mFolders[folderId];
	
			if (folder)
			{
				var file = folder.getFile(fileId);
	
				if (file)
				{
					return file.sprite;
				}
			}
		}
	
		return undefined;
	},
	initWithFile: function(filename)
	{
		this.mCurrEntity = 0;
	
		var path   = cc.FileUtils.getInstance().fullPathFromRelativePath(filename);
		var buffer = undefined;
		$.ajax({
            url : path,
            dataType: "text",
			async: false,
            success : function (data) {
                buffer = data;
            }
        });
	
		if (buffer === undefined)
		{
			return false;
		}
		
		var doc  =  $.parseXML(buffer);
		var $doc = $(doc);
	
		var $root = $doc.find("spriter_data").eq(0); 
		if ($root.length>0)
		{
			var version          = ValueHelper.getString($root.attr("scml_version"     ),"");
			var generator        = ValueHelper.getString($root.attr("generator"        ),"");
			var generatorVersion = ValueHelper.getString($root.attr("generator_version"),"");
			
			$root.children().each( $.proxy(function(k,v){
			    
				var $child = $(v);
				if ($child.length>0)
				{
					var tab = $child.prop("tagName");
	
					if (tab==="folder")
					{
						var folder = new SCMLHelper.Folder();
	
						folder.init($child);
	
						this.mFolders.push(folder);
					}
					else if (tab==="entity")
					{
						var entity = new SCMLHelper.Entity();
						entity.setId  (ValueHelper.getInt   ($child.attr("id")  , 0));
						entity.setName(ValueHelper.getString($child.attr("name"),""));
	
						$child.children().each( $.proxy(function(k,v){
							var $animationNode = $(v);
							if ($animationNode.length>0)
							{
								var animation = new SCMLHelper.Animation();
								animation.init($animationNode, this);
		
								entity.addAnimation(animation);
							}
						},this));
	
						this.mEntities.push(entity);
					}
				}
			},this));
		}
		
		this.scheduleUpdate();
		
		return true;
	}
});

cc.SpriterX.create = function(filename)
{
	var animator = new cc.SpriterX();
	if (animator!==undefined && animator.initWithFile(filename))
	{
		return animator;
	}
	
	return undefined;
}