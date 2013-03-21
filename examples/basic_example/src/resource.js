/*--------- MONSTER ----------*/
var monsterSCML = "./res/monster/Example.SCML";
var mon_shadows = {
	shadow_idle: "res/monster/mon_shadows/shadow_idle.png"
};

var mon_arms = {
	shoulder_a: "res/monster/mon_arms/shoulder_a.png",
	forearm_a : "res/monster/mon_arms/forearm_a.png",
	hand_a_1  : "res/monster/mon_arms/hand_a_1.png",
	shoulder_0: "res/monster/mon_arms/shoulder_0.png",
	forearm_0 : "res/monster/mon_arms/forearm_0.png",
	hand_0_0  : "res/monster/mon_arms/hand_0_0.png",
	hand_a_0  : "res/monster/mon_arms/hand_a_0.png",
	hand_0_1  : "res/monster/mon_arms/hand_0_1.png",
	hand_0_2  : "res/monster/mon_arms/hand_0_2.png",
	hand_0_3  : "res/monster/mon_arms/hand_0_3.png",
	hand_a_2  : "res/monster/mon_arms/hand_a_2.png",
	hand_a_3  : "res/monster/mon_arms/hand_a_3.png"
};

var mon_legs = {
	foot_a  : "res/monster/mon_legs/foot_a.png",
	thigh_a : "res/monster/mon_legs/thigh_a.png",
	pelvis_0: "res/monster/mon_legs/pelvis_0.png",
	foot_0  : "res/monster/mon_legs/foot_0.png",
	thigh_0 : "res/monster/mon_legs/thigh_0.png"
};

var mon_torso = {
	torso_0: "res/monster/mon_torso/torso_0.png"
};

var mon_head = {
	head_2: "res/monster/mon_head/head_2.png",
	head_3: "res/monster/mon_head/head_3.png",
	head_1: "res/monster/mon_head/head_1.png",
	head_0: "res/monster/mon_head/head_0.png"
};


/*--------- HERO ----------*/
var heroSCML    = "./res/hero/Hero.SCML";

var p1_sheild_0 = {
	shield_b: "res/hero/p1_sheild_0/shield_b.png"
};

var p1_arms_0 = {
	arm_b: "res/hero/p1_arms_0/arm_b.png",
	arm_0: "res/hero/p1_arms_0/arm_0.png"
};

var p1_forearms_0 = {
	forearm_a:      "res/hero/p1_forearms_0/forearm_a.png",
	forearm_0:      "res/hero/p1_forearms_0/forearm_0.png",
	forearm_b:      "res/hero/p1_forearms_0/forearm_b.png",
	hand_a:         "res/hero/p1_forearms_0/hand_a.png",
	forearm_nohand: "res/hero/p1_forearms_0/forearm_nohand.png"
};

var p1_shoulders_0 = {
	shoulder_a: "res/hero/p1_shoulders_0/shoulder_a.png",
	shoulder_0: "res/hero/p1_shoulders_0/shoulder_0.png"
};

var p1_chest_0 = {
	abs_0:   "res/hero/p1_chest_0/abs_0.png",
	chest_0: "res/hero/p1_chest_0/chest_0.png",
	abs_1:   "res/hero/p1_chest_0/abs_1.png",
	chest_1: "res/hero/p1_chest_0/chest_1.png"
};

var p1_pants_0 = {
	pelvis_0:"res/hero/p1_pants_0/pelvis_0.png",
	leg_a:   "res/hero/p1_pants_0/leg_a.png",
	leg_0:   "res/hero/p1_pants_0/leg_0.png",
	leg_b:   "res/hero/p1_pants_0/leg_b.png",
	pelvis_1:"res/hero/p1_pants_0/pelvis_1.png",
	leg_1:   "res/hero/p1_pants_0/leg_1.png"
};

var p1_boots_0 = {
	foot_a:     "res/hero/p1_boots_0/foot_a.png",
	knee_a:     "res/hero/p1_boots_0/knee_a.png",
	knee_0:     "res/hero/p1_boots_0/knee_0.png",
	foot_0:     "res/hero/p1_boots_0/foot_0.png",
	foot_2:     "res/hero/p1_boots_0/foot_2.png",
	knee_1:     "res/hero/p1_boots_0/knee_1.png",
	foot_2_bent:"res/hero/p1_boots_0/foot_2_bent.png",
	foot_a_bent:"res/hero/p1_boots_0/foot_a_bent.png"
};

var p1_head_0 = {
	head_0:      "res/hero/p1_head_0/head_0.png",
	idle_hair_2: "res/hero/p1_head_0/idle_hair_2.png",
	idle_hair_1: "res/hero/p1_head_0/idle_hair_1.png",
	idle_hair_0: "res/hero/p1_head_0/idle_hair_0.png",
	idle_blink_1:"res/hero/p1_head_0/idle_blink_1.png",
	idle_blink_0:"res/hero/p1_head_0/idle_blink_0.png",
	head_1:      "res/hero/p1_head_0/head_1.png",
	hair_walk_2: "res/hero/p1_head_0/hair_walk_2.png",
	hair_walk_1: "res/hero/p1_head_0/hair_walk_1.png",
	hair_walk_0: "res/hero/p1_head_0/hair_walk_0.png"
};

var p1_sword_0 = {
	sword_0: "res/hero/p1_sword_0/sword_0.png"
};

/*--------- Global resources to preload ----------*/
var g_ressources = [
    //image
	
	/* MONSTER */
	{ type:"image", src: mon_shadows.shadow_idle },
	
	{ type:"image", src: mon_arms.shoulder_0 },
	{ type:"image", src: mon_arms.forearm_a },
	{ type:"image", src: mon_arms.hand_a_1 },
	{ type:"image", src: mon_arms.shoulder_0 },
	{ type:"image", src: mon_arms.forearm_0 },
	{ type:"image", src: mon_arms.hand_0_0 },
	{ type:"image", src: mon_arms.hand_a_0 },
	{ type:"image", src: mon_arms.hand_0_1 },
	{ type:"image", src: mon_arms.hand_0_2 },
	{ type:"image", src: mon_arms.hand_0_3 },
	{ type:"image", src: mon_arms.hand_a_2 },
	{ type:"image", src: mon_arms.hand_a_3 },
	
	{ type:"image", src: mon_legs.foot_a },
	{ type:"image", src: mon_legs.thigh_a },
	{ type:"image", src: mon_legs.pelvis_0 },
	{ type:"image", src: mon_legs.foot_0 },
	{ type:"image", src: mon_legs.thigh_0 },
	
	{ type:"image", src: mon_torso.torso_0 },
	
	{ type:"image", src: mon_head.head_2 },
	{ type:"image", src: mon_head.head_3 },
	{ type:"image", src: mon_head.head_1 },
	{ type:"image", src: mon_head.head_0 },
	
	/* HERO */
	{ type:"image", src: p1_sheild_0.shield_b },
		
	{ type:"image", src: p1_arms_0.arm_b },
	{ type:"image", src: p1_arms_0.arm_0 },
		
	{ type:"image", src: p1_forearms_0.forearm_a },
	{ type:"image", src: p1_forearms_0.forearm_0 },
	{ type:"image", src: p1_forearms_0.forearm_b },
	{ type:"image", src: p1_forearms_0.hand_a },
	{ type:"image", src: p1_forearms_0.forearm_nohand },
		
	{ type:"image", src: p1_shoulders_0.shoulder_a },
	{ type:"image", src: p1_shoulders_0.shoulder_0 },
		
	{ type:"image", src: p1_chest_0.abs_0 },
	{ type:"image", src: p1_chest_0.chest_0 },
	{ type:"image", src: p1_chest_0.abs_1 },
	{ type:"image", src: p1_chest_0.chest_1 },
		
	{ type:"image", src: p1_pants_0.pelvis_0 },
	{ type:"image", src: p1_pants_0.leg_a },
	{ type:"image", src: p1_pants_0.leg_0 },
	{ type:"image", src: p1_pants_0.leg_b },
	{ type:"image", src: p1_pants_0.pelvis_1 },
	{ type:"image", src: p1_pants_0.leg_1 },
		
	{ type:"image", src: p1_boots_0.foot_a },
	{ type:"image", src: p1_boots_0.knee_a },
	{ type:"image", src: p1_boots_0.knee_0 },
	{ type:"image", src: p1_boots_0.foot_0 },
	{ type:"image", src: p1_boots_0.foot_2 },
	{ type:"image", src: p1_boots_0.knee_1 },
	{ type:"image", src: p1_boots_0.foot_2_bent },
	{ type:"image", src: p1_boots_0.foot_a_bent },
		
	{ type:"image", src: p1_head_0.head_0 },
	{ type:"image", src: p1_head_0.idle_hair_2 },
	{ type:"image", src: p1_head_0.idle_hair_1 },
	{ type:"image", src: p1_head_0.idle_hair_0 },
	{ type:"image", src: p1_head_0.idle_blink_1 },
	{ type:"image", src: p1_head_0.idle_blink_0 },
	{ type:"image", src: p1_head_0.head_1 },
	{ type:"image", src: p1_head_0.hair_walk_2 },
	{ type:"image", src: p1_head_0.hair_walk_1 },
	{ type:"image", src: p1_head_0.hair_walk_0 },
		
	{ type:"image", src: p1_sword_0.sword_0 },

    //plist

    //fnt

    //tmx

    //bgm
	{ type:"plist", src:monsterSCML },
	{ type:"plist", src:heroSCML    }

    //effect
];