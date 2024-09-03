import { Box, ImageList, ImageListItem, Tab, Tabs } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { BoxSearchMui, GifMui, IconSearchMui, InputSearchMui } from "../../style-mui";
import { MessageActions } from "../../../../../../redux/advise";

export default function Gif() {
    const gifs = [
        {
            name: 'Runing',
            gif: [
                {
                    "name": "Running GIF - Running GIFs",
                    "src": "https://i.gifer.com/origin/04/0483e07beaee26b99ca44e592f1b6e1a_w200.gif"
                },
                {
                    "name": "Transparent Goku GIF - Transparent Goku GIFs",
                    "src": "https://i.gifer.com/origin/b7/b71efa750d39cea5ac11d1e4885f3dcf_w200.gif"
                },
                {
                    "name": "Run Run away GIF - Run Run away Run fast GIFs",
                    "src": "https://i.gifer.com/origin/eb/eb4ffaa8baf14193d5cf4a2ddefd4c4d_w200.gif"
                },
                {
                    "name": "Stick figure GIF - Stick figure GIFs",
                    "src": "https://i.gifer.com/origin/7a/7aa85e04fbdf9db66dd8ce579ff591b5_w200.gif"
                },
                {
                    "name": "Transparent Sonic the hedgehog GIF - Transparent Sonic the hedgehog Video games GIFs",
                    "src": "https://i.gifer.com/origin/80/80908d38aba2e9a2e49315b0cc20b61b_w200.gif"
                },
                {
                    "name": "Transparent Duck GIF - Transparent Duck Loading icon GIFs",
                    "src": "https://i.gifer.com/origin/f5/f5baef4b6b6677020ab8d091ef78a3bc_w200.gif"
                },
                {
                    "name": "Naruto Anime GIF - Naruto Anime Manga GIFs",
                    "src": "https://i.gifer.com/origin/55/55c3e37befd5601bdd738e8b06c14741_w200.gif"
                },
                {
                    "name": "Running Loop GIF - Running Loop GIFs",
                    "src": "https://i.gifer.com/origin/36/36f376732b14df1609cb2f31260cb583_w200.gif"
                },
                {
                    "name": "Run GIF - Run GIFs",
                    "src": "https://i.gifer.com/origin/45/455b18d46295e136d3f44ee386c16c09_w200.gif"
                },
                {
                    "name": "Pokemon Pikachu GIF - Pokemon Pikachu Running GIFs",
                    "src": "https://i.gifer.com/origin/76/76dfca2a58c4dff5c9827b527132bda8_w200.gif"
                },
                {
                    "name": "Happy Running GIF - Happy Running Homer simpson GIFs",
                    "src": "https://i.gifer.com/origin/a4/a4881fae3686f9ca5a57cbc36fdb00c3_w200.gif"
                },
                {
                    "name": "Sonic GIF - Sonic GIFs",
                    "src": "https://i.gifer.com/origin/d8/d8e04ea3475f31bc17a2e0f7b2f4cc9a_w200.gif"
                },
                {
                    "name": "Scared Nope GIF - Scared Nope GIFs",
                    "src": "https://i.gifer.com/origin/ba/ba3dd820a26fdee1311befdfca7b453e_w200.gif"
                },
                {
                    "name": "Running Run GIF - Running Run Forrest gump GIFs",
                    "src": "https://i.gifer.com/origin/65/650750fbce822e5c42bf1a3ee555cc55_w200.gif"
                },
                {
                    "name": "Tiger Transparent GIF - Tiger Transparent Run GIFs",
                    "src": "https://i.gifer.com/origin/56/5699a7b6dc56396c205ac534d9226061_w200.gif"
                },
                {
                    "name": "B rabbit GIF - B rabbit GIFs",
                    "src": "https://i.gifer.com/origin/f3/f3e8a9e9e4a7ad679ff3c1408c30dafc_w200.gif"
                }
            ]
        },
        {
            name: 'Eating',
            gif: [
                {
                    "name": "GIFs Eating Dog Dog human GIF",
                    "src": "https://i.gifer.com/origin/7e/7e7a012b54676d29a26f83e63f860178_w200.gif"
                },
                {
                    "name": "GIFs Baby Camera GIF",
                    "src": "https://i.gifer.com/origin/66/662b481621bcb9e9e57391979b444f11_w200.gif"
                },
                {
                    "name": "GIFs Popcorn Eating popcorn Reaction GIF",
                    "src": "https://i.gifer.com/origin/d8/d8d08c9e516a868d08c391a9793c661c_w200.gif"
                },
                {
                    "name": "GIFs Michael jackson Set Mj GIF",
                    "src": "https://i.gifer.com/origin/d6/d6de0c51215f5d726a3fbd4dc029c506_w200.gif"
                },
                {
                    "name": "GIFs Eating Fast food Mcdonalds GIF",
                    "src": "https://i.gifer.com/origin/28/28e844c2db0ce0f588414b6fee51fe31_w200.gif"
                },
                {
                    "name": "GIFs Eating Hungry 90s GIF",
                    "src": "https://i.gifer.com/origin/ad/addfc2abfe199f63a0cfece6b7f5b026_w200.gif"
                },
                {
                    "name": "GIFs Eat Eating Patrick GIF",
                    "src": "https://i.gifer.com/origin/6c/6c03ba5c49ed57d03476687d20539836_w200.gif"
                },
                {
                    "name": "GIFs Hungry Eat Food GIF",
                    "src": "https://i.gifer.com/origin/29/298bfd8ef82e6fe4c9736eca48911991_w200.gif"
                },
                {
                    "name": "GIFs Funny Dog Chistosos GIF",
                    "src": "https://i.gifer.com/origin/9d/9d6d3c127e6b511f0299b837f89e28f2_w200.gif"
                },
                {
                    "name": "GIFs Baby Spaghetti Loves GIF",
                    "src": "https://i.gifer.com/origin/21/2178d45048aa9c3b34ab3b518551558b_w200.gif"
                },
                {
                    "name": "GIFs Eating Luffy Monkey d luffy GIF",
                    "src": "https://i.gifer.com/origin/22/22228bdd044ba4b0a134f322816b7966_w200.gif"
                },
                {
                    "name": "GIFs Hamster Eating Noodle GIF",
                    "src": "https://i.gifer.com/origin/bf/bf19c35cf564b3162b10ccadfd0b9cd7_w200.gif"
                },
                {
                    "name": "GIFs Eating Dog Banana GIF",
                    "src": "https://i.gifer.com/origin/b0/b00a8e31b860a72c99a8892e4c19c931_w200.gif"
                },
                {
                    "name": "GIFs Disney Food Eating GIF",
                    "src": "https://i.gifer.com/origin/0b/0b2dde122ed327045bdddce857012cc9_w200.gif"
                },
                {
                    "name": "GIFs Chocolate Eating Disney GIF",
                    "src": "https://i.gifer.com/origin/00/00a1151474fb4204febea5920992bf7c_w200.gif"
                },
                {
                    "name": "GIFs Monkey Watermelon Eats GIF",
                    "src": "https://i.gifer.com/origin/79/794f3c4617621a4d85ffa20d4851d488_w200.gif"
                },
                {
                    "name": "GIFs Popcorn Eating popcorn Jon stewart GIF",
                    "src": "https://i.gifer.com/origin/28/28d713049a1b0fbfa73931761de4655a_w200.gif"
                }
            ]
        },
        {
            name: 'Waiting',
            gif: [
                {
                    "name": "Waiting Impatient GIF - Waiting Impatient Spanky GIFs",
                    "src": "https://i.gifer.com/origin/b0/b00180324f33a5158e0539fca49ae319_w200.gif"
                },
                {
                    "name": "Funny Comic GIF - Funny Comic Cat GIFs",
                    "src": "https://i.gifer.com/origin/69/69d75ddfe2a5ed2633521cb16cd862f0_w200.gif"
                },
                {
                    "name": "Transparent Waiting GIF - Transparent Waiting Skeleton GIFs",
                    "src": "https://i.gifer.com/origin/3a/3a70f1003f8cdc9dfff52d9eef3789ce_w200.gif"
                },
                {
                    "name": "Waiting Haskell GIF - Waiting Haskell American GIFs",
                    "src": "https://i.gifer.com/origin/87/8720d9d13448b593b7c2cd07d8b4344b_w200.gif"
                },
                {
                    "name": "Transparent John travolta GIF - Transparent John travolta Confused GIFs",
                    "src": "https://i.gifer.com/origin/26/264162db570a4614c8fd7dc15c757b8e_w200.gif"
                },
                {
                    "name": "Waiting GIF - Waiting GIFs",
                    "src": "https://i.gifer.com/origin/b4/b40894b4326a5e4a6528186c4673b4ae_w200.gif"
                },
                {
                    "name": "Waiting GIF - Waiting GIFs",
                    "src": "https://i.gifer.com/origin/da/da2834742a17d831921203f11ecd9b51_w200.gif"
                },
                {
                    "name": "Loading Transparent GIF - Loading Transparent GIFs",
                    "src": "https://i.gifer.com/origin/4d/4dc11d17f5292fd463a60aa2bbb41f6a_w200.gif"
                },
                {
                    "name": "Loading Waiting GIF - Loading Waiting Hourglass GIFs",
                    "src": "https://i.gifer.com/origin/3f/3face8da2a6c3dcd27cb4a1aaa32c926_w200.gif"
                },
                {
                    "name": "Waiting Movie GIF - Waiting Movie Up GIFs",
                    "src": "https://i.gifer.com/origin/09/0962a387bd6cd1a698900f0277e4e417_w200.gif"
                },
                {
                    "name": "Cat Reaction GIF - Cat Reaction Cats GIFs",
                    "src": "https://i.gifer.com/origin/d6/d66620ccdb4aee4182879a2c07d393ef_w200.gif"
                },
                {
                    "name": "Waiting Loading GIF - Waiting Loading Bored GIFs",
                    "src": "https://i.gifer.com/origin/3c/3c82e43002a5c632edebf76eadc6499a_w200.gif"
                },
                {
                    "name": "Cat Souland GIF - Cat Souland GIFs",
                    "src": "https://i.gifer.com/origin/69/69dad030429f51032b95854314fe6e9d_w200.gif"
                },
                {
                    "name": "Lenny Serious GIF - Lenny Serious Simpsons GIFs",
                    "src": "https://i.gifer.com/origin/ef/efc857c52b796d2087dac1c95111d2ae_w200.gif"
                },
                {
                    "name": "Princess bride i hate waiting GIF - Princess bride i hate waiting GIFs",
                    "src": "https://i.gifer.com/origin/bf/bfc3da5ee35b0ea2ef1fca9ae3fdf106_w200.gif"
                },
                {
                    "name": "Loader Transparent GIF - Loader Transparent Iphone GIFs",
                    "src": "https://i.gifer.com/origin/b4/b4d657e7ef262b88eb5f7ac021edda87_w200.gif"
                }
            ]
        },
        {
            name: 'Fighting',
            gif: [
                {
                    "name": "GIF ninja, black and white, stick figure, best animated GIFs follow, start, swerve, curve, free download when your ex texts you, closing eyes, ",
                    "src": "https://i.gifer.com/origin/f0/f0b7086c75f10b965d44febad2d9e37c_w200.gif"
                },
                {
                    "name": "GIF fighting, best animated GIFs free download ",
                    "src": "https://i.gifer.com/origin/59/59d9d2ac00ca94bfdad85c3454308a0e_w200.gif"
                },
                {
                    "name": "GIF fighting, kung fu, everybody, best animated GIFs baby, free download ",
                    "src": "https://i.gifer.com/origin/77/77d665b268962d0229c91d46b00ed8ed_w200.gif"
                },
                {
                    "name": "GIF bangkok, demonstration, kung, best animated GIFs fu, free download ",
                    "src": "https://i.gifer.com/origin/38/38424a21d86519e5d53f4d80d70ed07b_w200.gif"
                },
                {
                    "name": "GIF anime, pictures, forums, best animated GIFs post, final fight, absolute, free download ",
                    "src": "https://i.gifer.com/origin/03/0333d89027a7834a7d8ad81b9defa756_w200.gif"
                },
                {
                    "name": "GIF robot, lmfao, breakin, best animated GIFs dancing, happy dance, party rock, dance party, free download happy, reactions, ",
                    "src": "https://i.gifer.com/origin/de/de7c79c81e2296423c2ec0c676778f88_w200.gif"
                },
                {
                    "name": "GIF fighting, fail, too, best animated GIFs late, tooacting, free download ",
                    "src": "https://i.gifer.com/origin/86/86275b8f5b21e030b310945e81900b9d_w200.gif"
                },
                {
                    "name": "GIF fight, best animated GIFs free download ",
                    "src": "https://i.gifer.com/origin/84/84eba41b7ba17bc048410857841d8030_w200.gif"
                },
                {
                    "name": "GIF fight, drop kick, jackie chan, best animated GIFs funny, random, hilarious, ouch, free download kick, ",
                    "src": "https://i.gifer.com/origin/a9/a9dc954216d077c9c0f3b5c83b8129c8_w200.gif"
                },
                {
                    "name": "GIF kids, cat fight, cat, best animated GIFs kitty, pets, smile and wave, lols, free download ",
                    "src": "https://i.gifer.com/origin/35/3552f3b98748dfcc5ac1a88f4b2af968_w200.gif"
                },
                {
                    "name": "GIF stickman, stick figure, art, best animated GIFs narrative, cartoon, animation, desktop, free download tech, fight, facebook, interface ",
                    "src": "https://i.gifer.com/origin/6c/6c53c7b88c99a9b1a7c8931e5275cde6_w200.gif"
                },
                {
                    "name": "GIF fighting, acting, angry, best animated GIFs moves, dangerous, free download ",
                    "src": "https://i.gifer.com/origin/5d/5db9eceb57c08a95d4d9ef8b8feb5189_w200.gif"
                },
                {
                    "name": "GIF anime, fatestay, fight, best animated GIFs night, series, works, scene, free download blade, ",
                    "src": "https://i.gifer.com/origin/bd/bd0decb9e44f146e5bac703c7edb46cb_w200.gif"
                },
                {
                    "name": "GIF fighting, car, head, best animated GIFs banging, free download ",
                    "src": "https://i.gifer.com/origin/3c/3c572ffcb45ed21f77f250f41f756dc5_w200.gif"
                },
                {
                    "name": "GIF fighting, girlfight, fight, best animated GIFs angry, youtube, mad, free download ",
                    "src": "https://i.gifer.com/origin/1d/1d7dd52a2b56b5f33c76de7b62bdccb2_w200.gif"
                },
                {
                    "name": "GIF death, fail, cliff, best animated GIFs stick men, free download ",
                    "src": "https://i.gifer.com/origin/76/76de6e19540d5a1f18c53070cba90e71_w200.gif"
                },
                {
                    "name": "GIF fighting, sasuke, naruto, best animated GIFs loop, free download ",
                    "src": "https://i.gifer.com/origin/61/6115306a0dfc7d2b5b1931d939ed5f9a_w200.gif"
                },
                {
                    "name": "GIF 3d, tunnel, perfect loops, best animated GIFs free download ",
                    "src": "https://i.gifer.com/origin/a2/a215dc3d5089fd9c226aa7d67bdca17d_w200.gif"
                },
                {
                    "name": "GIF goku, resurrection, punch, best animated GIFs one, surise, inch, free download ",
                    "src": "https://i.gifer.com/origin/d1/d1e3f370ae05fda914c63473878d8efb_w200.gif"
                },
                {
                    "name": "GIF katana, best animated GIFs free download ",
                    "src": "https://i.gifer.com/origin/1c/1c25598ba2f18f90c5fdb147b74bcd15_w200.gif"
                },
                {
                    "name": "GIF boobs, anime boobs, anime, best animated GIFs mecha, seinen, steam punk, giant robo, free download ",
                    "src": "https://i.gifer.com/origin/4b/4bc494925c958bb026dfe7118d24002d_w200.gif"
                },
                {
                    "name": "GIF anime, mob, psycho, best animated GIFs free download ",
                    "src": "https://i.gifer.com/origin/72/72761db0e277d4acddc8e08f18a96c78_w200.gif"
                },
                {
                    "name": "GIF fighting, pokemon, slapping, best animated GIFs pikachu, free download ",
                    "src": "https://i.gifer.com/origin/69/698d1c9f444e41775cd9a732dc911601_w200.gif"
                },
                {
                    "name": "GIF fight, anime, tuesday, best animated GIFs scenes, free download ",
                    "src": "https://i.gifer.com/origin/ba/baf6ce6f6d07da3d67bd57c7a548ed61_w200.gif"
                },
                {
                    "name": "GIF fighting, best animated GIFs free download ",
                    "src": "https://i.gifer.com/origin/94/94aee7efd70b2c140328e1b55e26b502_w200.gif"
                },
                {
                    "name": "GIF fighting, mantis, best animated GIFs free download ",
                    "src": "https://i.gifer.com/origin/e5/e590ff74e5405e7b0c4ca2b23ccef96f_w200.gif"
                },
                {
                    "name": "GIF the loud house, fighting, nickelodeon, best animated GIFs animation, fight, nicktoons, cartoons, free download sibling, ",
                    "src": "https://i.gifer.com/origin/45/45025b0a3d98a8bd8515dabdec1af605_w200.gif"
                },
                {
                    "name": "GIF fighting, cute cat, jedi, best animated GIFs cat, dog, light saber, lightsaber, free download ",
                    "src": "https://i.gifer.com/origin/6c/6c07b84e74605f1fb9df1651c3d33683_w200.gif"
                }
            ]
        },
        {
            name: 'Sleeping',
            gif: [
                {
                    "name": "GIF bored, sleepy, falling asleep, best animated GIFs boring, baby, free download ",
                    "src": "https://i.gifer.com/origin/dd/ddb31dd070c380014100bd8e3b3cbeb9_w200.gif"
                },
                {
                    "name": "GIF sleeping, dog, surprise, best animated GIFs afv, babies, free download ",
                    "src": "https://i.gifer.com/origin/3c/3c1b619370c9d2a29137d37abce0b51b_w200.gif"
                },
                {
                    "name": "GIF sexy, love, hug, best animated GIFs maria valverde, hug me, abrao, 3msc, free download mario casas, ",
                    "src": "https://i.gifer.com/origin/30/30cad08ab66cc10109820a08a9869ac5_w200.gif"
                },
                {
                    "name": "GIF sleeping, synagogue, new, best animated GIFs illinois, sermon, elder scrolls, deerfield, free download teammate, npc, ",
                    "src": "https://i.gifer.com/origin/56/5621bd530e53481072ce6a9840182ba5_w200.gif"
                },
                {
                    "name": "GIF sleeping, dancing, baby, best animated GIFs music, beat, when the beat drops, free download ",
                    "src": "https://i.gifer.com/origin/8a/8aaf39860d6a077e297d45f9947b22a1_w200.gif"
                },
                {
                    "name": "GIF couple in bed, snuggle, touching, best animated GIFs true love, together, us, play with my hair, free download forever love, come to bed, lets cuddle, love eternal, movies, love, late night, relationship, relationships, latenight, stay in bed, lets fall in love, caressing each other ",
                    "src": "https://i.gifer.com/origin/ca/caf8f42aa11c2772f43b1ddc0c251766_w200.gif"
                },
                {
                    "name": "GIF transparent, panda, sleep, best animated GIFs monday, snooze, sleepy, tired, free download rolling, over it, ",
                    "src": "https://i.gifer.com/origin/49/492d4ba00486ce423c75840ac930afc4_w200.gif"
                },
                {
                    "name": "GIF kawaii, kitty, meow, best animated GIFs hearts, nyan, cat, transparent, free download yawn, ",
                    "src": "https://i.gifer.com/origin/a6/a695a35d34cf317a067ccae7b148f909_w200.gif"
                },
                {
                    "name": "GIF dog, deep, sleep, best animated GIFs free download ",
                    "src": "https://i.gifer.com/origin/8e/8ee167651ef212da67834ecd10ba3c97_w200.gif"
                },
                {
                    "name": "GIF cat, sleep, funny cat, best animated GIFs proud, animal, kitty, free download ",
                    "src": "https://i.gifer.com/origin/94/94b6688b7132adbb0e7e7350d3762c70_w200.gif"
                },
                {
                    "name": "GIF couple, kissing, making out, best animated GIFs hugging, love, sweet, iibzuu, free download e, ",
                    "src": "https://i.gifer.com/origin/ae/ae3a9cd450b32169e7ed453582b32813_w200.gif"
                },
                {
                    "name": "GIF sleeping, monday, i want to sleep, best animated GIFs mondays, i want to marry my bed, monsters inc, sleepy, free download boo, runway republic, i hate mondays, let me sleep, monsters inc boo, im sleepy ",
                    "src": "https://i.gifer.com/origin/89/8982c29e538a281a01600f99672b7829_w200.gif"
                },
                {
                    "name": "GIF tired, sleeping, dancing, best animated GIFs reactions, free download ",
                    "src": "https://i.gifer.com/origin/b4/b497debcb35a96b1ca6af0a8f2cf5fbd_w200.gif"
                },
                {
                    "name": "GIF sleep, yawn, animals, best animated GIFs sloth, sloths, meet the sloths, free download ",
                    "src": "https://i.gifer.com/origin/37/3779fcd74d85f0670c81f68b708dbd94_w200.gif"
                },
                {
                    "name": "GIF couples, best animated GIFs free download ",
                    "src": "https://i.gifer.com/origin/c7/c700686f72c156cf4b7f9963277c5df9_w200.gif"
                },
                {
                    "name": "GIF sleeping, spongebob squarepants, best animated GIFs free download ",
                    "src": "https://i.gifer.com/origin/97/976ca761c4b5ed3b23cb8993d3cd1526_w200.gif"
                },
                {
                    "name": "GIF sleeping, homer simpson, hungover, best animated GIFs homer, book, lazy, tired, free download go away, simpsons, cartoons comics, ",
                    "src": "https://i.gifer.com/origin/0a/0af8fce2d236234d25b3601d515ffc15_w200.gif"
                },
                {
                    "name": "GIF sleeping, sleep, tired, best animated GIFs cat, sleepy cute kitten falls asleep, kitten, cute kitten, free download ",
                    "src": "https://i.gifer.com/origin/f9/f9c0d428908ec21e7e95cbbab5dfa403_w200.gif"
                }
            ]
        },
        {
            name: 'Smile',
            gif: [
                {
                    "name": "Smiling Graduation GIF - Smiling Graduation The office GIFs",
                    "src": "https://i.gifer.com/origin/13/1336621c1e640665d030479e07f90786_w200.gif"
                },
                {
                    "name": "Smiling Excited GIF - Smiling Excited Smile GIFs",
                    "src": "https://i.gifer.com/origin/df/dfb9a3bee3c80da9731d34b891364c2b_w200.gif"
                },
                {
                    "name": "Smiling Dog GIF - Smiling Dog Animals GIFs",
                    "src": "https://i.gifer.com/origin/01/0198ec7a6009bd2544401ce084f3156f_w200.gif"
                },
                {
                    "name": "Smiling Oh yeah GIF - Smiling Oh yeah Satisfaction GIFs",
                    "src": "https://i.gifer.com/origin/09/09abef7b508396b875511a3dc7d41ddb_w200.gif"
                },
                {
                    "name": "Applause Smiling GIF - Applause Smiling Thumbs up GIFs",
                    "src": "https://i.gifer.com/origin/0c/0cd78d8913046a629720592a8c8fd467_w200.gif"
                },
                {
                    "name": "Smiling The rock GIF - Smiling The rock Happy GIFs",
                    "src": "https://i.gifer.com/origin/ee/eea5e4b2dd0f199deb500b17ab774bc6_w200.gif"
                },
                {
                    "name": "Funny Like a boss GIF - Funny Like a boss Happy dance GIFs",
                    "src": "https://i.gifer.com/origin/8a/8aaaa441b5c7b63740a9472d9a3aa0f9_w200.gif"
                },
                {
                    "name": "Emoji Download GIF - Emoji Download Emojis GIFs",
                    "src": "https://i.gifer.com/origin/a6/a696590f00ea820a27ee38dc77d478d6_w200.gif"
                },
                {
                    "name": "Smiling GIF - Smiling GIFs",
                    "src": "https://i.gifer.com/origin/0f/0f63c6c6129e9a9cf60afeced6fa5fa9_w200.gif"
                },
                {
                    "name": "Dog Cute GIF - Dog Cute Cute animals GIFs",
                    "src": "https://i.gifer.com/origin/ae/ae798289c2442cc732c403c85a9f8341_w200.gif"
                },
                {
                    "name": "Will smith Smiling GIF - Will smith Smiling Dancing GIFs",
                    "src": "https://i.gifer.com/origin/9d/9ddf7b9f4595e99f1634bb268468ec9e_w200.gif"
                },
                {
                    "name": "Smiling Dancing GIF - Smiling Dancing Swaying GIFs",
                    "src": "https://i.gifer.com/origin/5b/5b2f77f32c9e9312fa19342139be4d7e_w200.gif"
                },
                {
                    "name": "Emoji Apple GIF - Emoji Apple Emojis GIFs",
                    "src": "https://i.gifer.com/origin/e5/e50715c418cbd05047c7e5adfbedcb31_w200.gif"
                },
                {
                    "name": "Troll GIF - Troll GIFs",
                    "src": "https://i.gifer.com/origin/87/874b90766d627cd96bd7f2773a58093c_w200.gif"
                },
                {
                    "name": "Smiling Smile GIF - Smiling Smile Smirk GIFs",
                    "src": "https://i.gifer.com/origin/7f/7f748bf802f1c663ca92170f3a4f19f7_w200.gif"
                },
                {
                    "name": "Evil grin Evil GIF - Evil grin Evil Evil smile GIFs",
                    "src": "https://i.gifer.com/origin/60/6082b71ad7c0fff8d672cbc67cdd7b9f_w200.gif"
                }
            ]
        },
        {
            name: 'Flirting',
            gif: [
                {
                    "name": "GIF flirting, best animated GIFs free download ",
                    "src": "https://i.gifer.com/origin/02/02c9cc6ddd915ccb881a84ca43e6214a_w200.gif"
                },
                {
                    "name": "GIF flirting, best animated GIFs free download ",
                    "src": "https://i.gifer.com/origin/f7/f7565897758c2ee9de0eb50e97fd7c56_w200.gif"
                },
                {
                    "name": "GIF flirting, wink, flirt, best animated GIFs kiss, winking, tinder, shaq, free download blowing kisses, how you doin, ",
                    "src": "https://i.gifer.com/origin/93/9304a12a374572ed62da04f70e9203fd_w200.gif"
                },
                {
                    "name": "GIF angry, reaction, mad, best animated GIFs hate, anger, reactions, enraged, free download livid, pissed off, hairbrush, bitter, hostile, look whos talking now, brush girl, angry girl shaking a hairbrush, classic reaction ",
                    "src": "https://i.gifer.com/origin/5e/5e23d0e89555fd9589fe3bbe409d4e89_w200.gif"
                },
                {
                    "name": "GIF flirting, best animated GIFs free download ",
                    "src": "https://i.gifer.com/origin/b4/b4329236f51d9f04e49ab024a232ac2b_w200.gif"
                },
                {
                    "name": "GIF flirting, horny, lets fuck, best animated GIFs wanna fuck, sex and the city, kim cattrall, samantha jones, free download samantha, ",
                    "src": "https://i.gifer.com/origin/14/14733930a827af7d86c774a2cee090a3_w200.gif"
                },
                {
                    "name": "GIF flirting, sexy, glasses, best animated GIFs come hither, the look, free download ",
                    "src": "https://i.gifer.com/origin/8b/8b15774150218a7854bf6d3e9d0d8421_w200.gif"
                },
                {
                    "name": "GIF dancing, swag, monkey, best animated GIFs funny, free download ",
                    "src": "https://i.gifer.com/origin/dd/dd241343a9b910c921aef08ff129f597_w200.gif"
                },
                {
                    "name": "GIF flirting, john travolta, blowing a kiss, best animated GIFs free download ",
                    "src": "https://i.gifer.com/origin/bd/bd0c3aeffe15058e4186fde901166bdd_w200.gif"
                },
                {
                    "name": "GIF flirting, best animated GIFs free download ",
                    "src": "https://i.gifer.com/origin/bf/bfccde4d0d45bc30dc8c04b7de7d9825_w200.gif"
                },
                {
                    "name": "GIF fight, girls, best animated GIFs free download ",
                    "src": "https://i.gifer.com/origin/3b/3b4a1318caca87e24dd02e64e6a3aa2e_w200.gif"
                },
                {
                    "name": "GIF flirting, flirt, bugs bunny, best animated GIFs cute, cartoon, free download ",
                    "src": "https://i.gifer.com/origin/6b/6b9d8f996eecc6ecdd33c31de6d95a66_w200.gif"
                },
                {
                    "name": "GIF love, flirting, feels, best animated GIFs beating heart, heart, heartbeat, crush, free download in love, te amo, feelings, reactions, amor, butterflies, feel better, infatuation ",
                    "src": "https://i.gifer.com/origin/0b/0b46adc1caf5eb55cc20837e41dcaba3_w200.gif"
                },
                {
                    "name": "GIF hug, flirting, chibird, best animated GIFs loading, virtual, free download ",
                    "src": "https://i.gifer.com/origin/2d/2d90d6a77c52ff7ec409b25997aa676c_w200.gif"
                },
                {
                    "name": "GIF aroused, flirt, sexy, best animated GIFs flirting, funny sex, kinky, reactions, free download ruth wilson, lewd, luther, alice morgan, sex, make love, do want ",
                    "src": "https://i.gifer.com/origin/ce/ce4f2e96ea2bf4f7b0df13bedb146668_w200.gif"
                },
                {
                    "name": "GIF aroused, flirting, horny, best animated GIFs reaction, steamy, tinder, turned on, free download hot and bothered, sexy, hot, picture, underwear, tomorrow, swipe right ",
                    "src": "https://i.gifer.com/origin/f2/f25b39b63b65ffee047029dd2901a82f_w200.gif"
                }
            ]
        },
        {
            name: 'Cutes',
            gif: [
                {
                    "name": "Cute Angry birds GIF - Cute Angry birds Lost GIFs",
                    "src": "https://i.gifer.com/origin/2f/2fbf66802f50c0da6d59732878686c4a_w200.gif"
                },
                {
                    "name": "Laughing Cute GIF - Laughing Cute Minions GIFs",
                    "src": "https://i.gifer.com/origin/18/1898d821cba9682e843c7e4a86a2aa2b_w200.gif"
                },
                {
                    "name": "Cute Patrick GIF - Cute Patrick Patrick star GIFs",
                    "src": "https://i.gifer.com/origin/bf/bfe8d3f7441272faab4efbdab38034b9_w200.gif"
                },
                {
                    "name": "Cute Angry birds GIF - Cute Angry birds Fall GIFs",
                    "src": "https://i.gifer.com/origin/3a/3ae14033daf59ffdd6b3dc58177a5630_w200.gif"
                },
                {
                    "name": "Angry birds Cute GIF - Angry birds Cute Angry GIFs",
                    "src": "https://i.gifer.com/origin/f6/f6db9eaf43d28f6b8561d7a7850878eb_w200.gif"
                },
                {
                    "name": "Cat Cute GIF - Cat Cute Happy cat GIFs",
                    "src": "https://i.gifer.com/origin/c4/c4dd26f44f4012bc24dfeeb778473253_w200.gif"
                },
                {
                    "name": "Cat Toebeanz GIF - Cat Toebeanz GIFs",
                    "src": "https://i.gifer.com/origin/8a/8a37a8a2be41f8762e796cff486bf673_w200.gif"
                },
                {
                    "name": "Happy Transparent GIF - Happy Transparent Pink GIFs",
                    "src": "https://i.gifer.com/origin/de/dea8f93fb360e56d2a55f6612a8943f3_w200.gif"
                },
                {
                    "name": "Transparent Duck GIF - Transparent Duck Loading icon GIFs",
                    "src": "https://i.gifer.com/origin/f5/f5baef4b6b6677020ab8d091ef78a3bc_w200.gif"
                },
                {
                    "name": "Anime Cute GIF - Anime Cute Kawaii GIFs",
                    "src": "https://i.gifer.com/origin/c6/c601eaa58aaeeed58439b9fe2367f299_w200.gif"
                },
                {
                    "name": "Rabbit GIF - Rabbit GIFs",
                    "src": "https://i.gifer.com/origin/fb/fb710f5c93e4db6fc0661a805e121917_w200.gif"
                },
                {
                    "name": "Cute Adorable GIF - Cute Adorable Aww GIFs",
                    "src": "https://i.gifer.com/origin/36/3691dc3a80ba6be0ae4815d05b75bb73_w200.gif"
                },
                {
                    "name": "Kawaii Cinnamoroll GIF - Kawaii Cinnamoroll Bunny GIFs",
                    "src": "https://i.gifer.com/origin/6a/6a215df49524df23bbb9ebbd2da7b45f_w200.gif"
                },
                {
                    "name": "So cute GIF - So cute GIFs",
                    "src": "https://i.gifer.com/origin/13/1361f3ed24f3ae66135f7ad661f5255d_w200.gif"
                },
                {
                    "name": "Stitch Transparent GIF - Stitch Transparent Hula GIFs",
                    "src": "https://i.gifer.com/origin/d0/d04b572a7c25987781f4a1080347be64_w200.gif"
                },
                {
                    "name": "Hello kitty Cute GIF - Hello kitty Cute Pink GIFs",
                    "src": "https://i.gifer.com/origin/a2/a2e2a2c040792f1da66cdc70e92c5bd7_w200.gif"
                }
            ]
        },
        {
            name: 'Funny',
            gif: [
                {
                    "name": "GIF funny, happy, sloth, best animated GIFs zootopia, happiness, laughing, joy, free download slow, pleased, chistosos, funny images, very funny, best ",
                    "src": "https://i.gifer.com/origin/b8/b842107e63c67d5674d17e0f576274fa_w200.gif"
                },
                {
                    "name": "GIF funniest, top, internet, best animated GIFs free download ",
                    "src": "https://i.gifer.com/origin/af/af0597a629671685f9cf782524b67913_w200.gif"
                },
                {
                    "name": "GIF cat, reaction, cats, best animated GIFs typing, working, hacker, facebook, free download best, actions, hacking, webs ",
                    "src": "https://i.gifer.com/origin/d6/d66620ccdb4aee4182879a2c07d393ef_w200.gif"
                },
                {
                    "name": "GIF memes, dancing, skeleton, best animated GIFs clever disguise, puns, free download ",
                    "src": "https://i.gifer.com/origin/a6/a66549661840b17271352a06e710001b_w200.gif"
                },
                {
                    "name": "GIF funny, hair, monkey, best animated GIFs blow dry, free download ",
                    "src": "https://i.gifer.com/origin/37/37a5a981a5465af6daae83565d7b1812_w200.gif"
                },
                {
                    "name": "GIF funny, humor, lol, best animated GIFs siz, free download ",
                    "src": "https://i.gifer.com/origin/2e/2ee29b63a32639f2ea22af34055cb31a_w200.gif"
                },
                {
                    "name": "GIF christmas, merry, best animated GIFs free download ",
                    "src": "https://i.gifer.com/origin/df/dfb21d2f7eb84a40c91982049bbc510d_w200.gif"
                },
                {
                    "name": "GIF cat, funny cat, best animated GIFs free download ",
                    "src": "https://i.gifer.com/origin/74/74b9b78a2896e4533a83a323ed0b918e_w200.gif"
                },
                {
                    "name": "GIF funny, animals, basketball, best animated GIFs nba, mashup, kittens, cats, free download cat, fun, shaq, hilarious ",
                    "src": "https://i.gifer.com/origin/b5/b5ec3eb52d0713fbb79fc696011bc7da_w200.gif"
                },
                {
                    "name": "GIF car, drift, barbie, best animated GIFs free download ",
                    "src": "https://i.gifer.com/origin/b4/b4a2c7fb9365aa08ee601ae50db23b30_w200.gif"
                },
                {
                    "name": "GIF happy, dance, dancing, best animated GIFs baile, friday, kid, funny dancing, free download chubby, ",
                    "src": "https://i.gifer.com/origin/ab/ab2cd81153f2128a14b6120f384516d4_w200.gif"
                },
                {
                    "name": "GIF funny, goats, best animated GIFs free download ",
                    "src": "https://i.gifer.com/origin/e0/e03c5ebd0a7d94a7f852871cbf899fa2_w200.gif"
                },
                {
                    "name": "GIF fail, teacher, best animated GIFs free download ",
                    "src": "https://i.gifer.com/origin/f1/f1f5b1ff0a10ae40a162a85e9edde60b_w200.gif"
                },
                {
                    "name": "GIF anime, dbz, goku super saiyan, best animated GIFs saiyan, super, stages, free download ",
                    "src": "https://i.gifer.com/origin/f2/f2decdef72706578a92f98dda1276cd8_w200.gif"
                }
            ]
        },
        {
            name: 'Animal',
            gif: [
                {
                    "name": "Cat Reaction GIF - Cat Reaction Cats GIFs",
                    "src": "https://i.gifer.com/origin/d6/d66620ccdb4aee4182879a2c07d393ef_w200.gif"
                },
                {
                    "name": "Cats Please GIF - Cats Please Tell GIFs",
                    "src": "https://i.gifer.com/origin/e9/e9a505d1d8604f350e9df5b33b551493_w200.gif"
                },
                {
                    "name": "Cat Lovers GIF - Cat Lovers GIFs",
                    "src": "https://i.gifer.com/origin/1c/1c26d1592f9b87f608a32ec62dc5ee0b_w200.gif"
                },
                {
                    "name": "Cat Shaq GIF - Cat Shaq GIFs",
                    "src": "https://i.gifer.com/origin/83/831d6b315e1ad6120488d4b13fc254a5_w200.gif"
                },
                {
                    "name": "Cat Hugs GIF - Cat Hugs Kisses GIFs",
                    "src": "https://i.gifer.com/origin/a9/a9c2ffdc1e3f099e8056ca93cd34e5e5_w200.gif"
                },
                {
                    "name": "Cat Fighting GIF - Cat Fighting Star wars GIFs",
                    "src": "https://i.gifer.com/origin/a5/a5e8fcf99ce8ff90768b196d96d38eba_w200.gif"
                },
                {
                    "name": "Cat Dog GIF - Cat Dog Jedi GIFs",
                    "src": "https://i.gifer.com/origin/e3/e396936e942d510e6ae44f3f12028feb_w200.gif"
                },
                {
                    "name": "Cat Kitten GIF - Cat Kitten Cute GIFs",
                    "src": "https://i.gifer.com/origin/52/523e07e0ce014e99ccb95a9667dff742_w200.gif"
                },
                {
                    "name": "Cat Cats GIF - Cat Cats Cash GIFs",
                    "src": "https://i.gifer.com/origin/d7/d7379dbccb6e2bca7ba71645ac0f4291_w200.gif"
                },
                {
                    "name": "Cat Kitty GIF - Cat Kitty Animal GIFs",
                    "src": "https://i.gifer.com/origin/98/98b3419653b721d52e2fe4900ef87763_w200.gif"
                },
                {
                    "name": "Cool Cat GIF - Cool Cat GIFs",
                    "src": "https://i.gifer.com/origin/32/32e6faebe53c8c175229ae4f9611d165_w200.gif"
                },
                {
                    "name": "Cat Slinky GIF - Cat Slinky GIFs",
                    "src": "https://i.gifer.com/origin/e7/e7199ccab24267d19d7623b68805aa25_w200.gif"
                },
                {
                    "name": "Happy Cat GIF - Happy Cat Mrw GIFs",
                    "src": "https://i.gifer.com/origin/e7/e7a2ca1e4aa8574b3992070e3513baa6_w200.gif"
                },
                {
                    "name": "Cat Ufo GIF - Cat Ufo Abduction GIFs",
                    "src": "https://i.gifer.com/origin/45/45c9e34ccf62c9d940b258edf065fd3f_w200.gif"
                },
                {
                    "name": "Cats Cleaning GIF - Cats Cleaning Clean up GIFs",
                    "src": "https://i.gifer.com/origin/4b/4b246835583c0bc2df83fa9542912ebb_w200.gif"
                },
                {
                    "name": "GIF dog, excited, corgi, best animated GIFs puppy, free download ",
                    "src": "https://i.gifer.com/origin/31/312c6b25c3f7c3e133cfc6b67a5ad745_w200.gif"
                },
                {
                    "name": "GIF dog, munching, banana, best animated GIFs free download ",
                    "src": "https://i.gifer.com/origin/4a/4a7a3e1530000dfe6028516a0bcb7f46_w200.gif"
                },
                {
                    "name": "GIF dog, cute, cute animals, best animated GIFs pup, ears, free download ",
                    "src": "https://i.gifer.com/origin/ae/ae798289c2442cc732c403c85a9f8341_w200.gif"
                },
                {
                    "name": "GIF cat, dogs, catsword, best animated GIFs fights, way, free download ",
                    "src": "https://i.gifer.com/origin/3a/3a422ae2f8db6fe88aa3224b1f360617_w200.gif"
                },
                {
                    "name": "GIF omg, dog, astounded, best animated GIFs disbelief, reaction, freaked out, zomg, free download the horror, shocked boi, ",
                    "src": "https://i.gifer.com/origin/40/407f8633d54ad55d98db036afbe8551d_w200.gif"
                },
                {
                    "name": "GIF dog, best animated GIFs free download ",
                    "src": "https://i.gifer.com/origin/ac/ac28591144c303f919aac41dcc3cc0d4_w200.gif"
                },
                {
                    "name": "GIF dog, turtle, lift, best animated GIFs free download ",
                    "src": "https://i.gifer.com/origin/ed/edd9fc6ab510ca3006bc86acf61660e3_w200.gif"
                },
                {
                    "name": "GIF transparent, crazy, mad, best animated GIFs dogdings, pissed, free download ",
                    "src": "https://i.gifer.com/origin/62/62296c994ed335057685d5560fd5bcf6_w200.gif"
                },
                {
                    "name": "GIF dog, deal, best animated GIFs free download ",
                    "src": "https://i.gifer.com/origin/d1/d178757e86755cc9bf216142a5ac41d9_w200.gif"
                },
                {
                    "name": "GIF dog, bulldog, purple, best animated GIFs flying, french bulldog, frenchie, fly, free download puppy, cute, dottie, french bully ",
                    "src": "https://i.gifer.com/origin/86/861c6f915f7486e993a4da10e8384183_w200.gif"
                },
                {
                    "name": "GIF digging, work, best animated GIFs free download ",
                    "src": "https://i.gifer.com/origin/2f/2ff12ba8b51361ed09a2524183e0ef92_w200.gif"
                },
                {
                    "name": "GIF dog, explosion, cat, best animated GIFs blog, monday, very, chase, free download lasers, yelp, eat24, ",
                    "src": "https://i.gifer.com/origin/75/7529ade8725899d55d64f743f1c3ce7b_w200.gif"
                },
                {
                    "name": "GIF high five, cute, best animated GIFs free download ",
                    "src": "https://i.gifer.com/origin/5b/5b09dd9daf6a032d30ce9791e4be5210_w200.gif"
                },
                {
                    "name": "GIF dog, kid, dances, best animated GIFs free download ",
                    "src": "https://i.gifer.com/origin/47/47fc3aee68fad3f7a2efbe85f1d4293e_w200.gif"
                },
                {
                    "name": "GIFs Panda Tree Climbing GIF",
                    "src": "https://i.gifer.com/origin/cb/cba680f18924e4cafbfe9b97d9af6ce6_w200.gif"
                },
                {
                    "name": "GIFs Panda Dancing Pandas GIF",
                    "src": "https://i.gifer.com/origin/22/22f37c8f7601e0f4847e99442433c5c4_w200.gif"
                },
                {
                    "name": "GIFs Panda Bath Eyebleach GIF",
                    "src": "https://i.gifer.com/origin/c0/c004f6812da746a01d1af15ab6a2d783_w200.gif"
                },
                {
                    "name": "GIFs Panda Rolling Animals GIF",
                    "src": "https://i.gifer.com/origin/0d/0dae0abcbaadc37b5419d48bf061eb7c_w200.gif"
                },
                {
                    "name": "GIFs Panda Transparent GIF",
                    "src": "https://i.gifer.com/origin/d6/d66ffd1987d422d9b3db13cebcb87947_w200.gif"
                },
                {
                    "name": "GIFs Pandas Pandawhale Sitepandawhalecom GIF",
                    "src": "https://i.gifer.com/origin/46/46cdbd062616ba8c4c5db327d15c86c5_w200.gif"
                },
                {
                    "name": "GIFs Transparent Panda Sleep GIF",
                    "src": "https://i.gifer.com/origin/49/492d4ba00486ce423c75840ac930afc4_w200.gif"
                },
                {
                    "name": "GIFs Funny Panda No GIF",
                    "src": "https://i.gifer.com/origin/be/bea2b017eccd14181872246c8c662f66_w200.gif"
                },
                {
                    "name": "GIFs Panda Roll Tumble GIF",
                    "src": "https://i.gifer.com/origin/b0/b0e5f17b59457ccc97c43e241514d61c_w200.gif"
                },
                {
                    "name": "GIFs Sad panda GIF",
                    "src": "https://i.gifer.com/origin/f9/f99494a75ad5b4f28c339b01d429b682_w200.gif"
                },
                {
                    "name": "GIFs Panda Transparent Hamburger GIF",
                    "src": "https://i.gifer.com/origin/b1/b1f5933c8dba4e1bded677590036a0e8_w200.gif"
                },
                {
                    "name": "GIFs Panda GIF",
                    "src": "https://i.gifer.com/origin/6c/6cdabad0b1e74846cc909eb5fe34f04a_w200.gif"
                },
                {
                    "name": "GIFs Panda Angry Tantrum GIF",
                    "src": "https://i.gifer.com/origin/e4/e402b7d5322a61f855f74d217cc31f7d_w200.gif"
                },
                {
                    "name": "GIFs Pandas People Paintings GIF",
                    "src": "https://i.gifer.com/origin/60/607de2bf2d780cd432d81ebff6606869_w200.gif"
                },
                {
                    "name": "GIFs Panda Oh no Eyes GIF",
                    "src": "https://i.gifer.com/origin/0f/0fc72fdd9bd8b819e09d796c35eae828_w200.gif"
                },
                {
                    "name": "GIFs Panda Transparent GIF",
                    "src": "https://i.gifer.com/origin/6f/6f434e0aaf2e684287023f4d857125a1_w200.gif"
                }
            ]
        },
        {
            name: 'Tired',
            gif: [
                {
                    "name": "Tired Bored GIF - Tired Bored Tom and jerry GIFs",
                    "src": "https://i.gifer.com/origin/ec/ec42504973a2ea66f3c42f8e732a4eda_w200.gif"
                },
                {
                    "name": "Tired Stressed GIF - Tired Stressed Stress GIFs",
                    "src": "https://i.gifer.com/origin/e6/e6d959e51194044c2f745d6b30d313be_w200.gif"
                },
                {
                    "name": "Tired Spongebob GIF - Tired Spongebob Spongebob squarepants GIFs",
                    "src": "https://i.gifer.com/origin/16/160ea4f0535ea6c44271d13b050c90f8_w200.gif"
                },
                {
                    "name": "Tired Unimpressed GIF - Tired Unimpressed Bored GIFs",
                    "src": "https://i.gifer.com/origin/6f/6f1ea1b8f9210138a4532e109eb57f48_w200.gif"
                },
                {
                    "name": "Dance Friday GIF - Dance Friday Party GIFs",
                    "src": "https://i.gifer.com/origin/26/26c6da56a1465c120186928f19bd0ffc_w200.gif"
                },
                {
                    "name": "Tired Sleepy GIF - Tired Sleepy Dozing off GIFs",
                    "src": "https://i.gifer.com/origin/63/638bc6e6d5e9618311290e8dd138a9bb_w200.gif"
                },
                {
                    "name": "Tired Kitten GIF - Tired Kitten Cat GIFs",
                    "src": "https://i.gifer.com/origin/99/99117ef8f5ee07511e5a02d0912d168c_w200.gif"
                },
                {
                    "name": "So tired Wah GIF - So tired Wah Moprah GIFs",
                    "src": "https://i.gifer.com/origin/0c/0cb42fbe74a9c2194e93116930d5d605_w200.gif"
                },
                {
                    "name": "Tired Sleep GIF - Tired Sleep Sleepy GIFs",
                    "src": "https://i.gifer.com/origin/46/4615c0e061961d8d6522a3616cd6d15a_w200.gif"
                },
                {
                    "name": "Tired I give up GIF - Tired I give up Back to bed GIFs",
                    "src": "https://i.gifer.com/origin/18/182049879ac51107c8566821b22107b9_w200.gif"
                },
                {
                    "name": "Tired Princess and the frog GIF - Tired Princess and the frog The princess and the frog GIFs",
                    "src": "https://i.gifer.com/origin/39/396dde6187cdc1be8472f095f7980bec_w200.gif"
                },
                {
                    "name": "Stressed Tired GIF - Stressed Tired Barney fife GIFs",
                    "src": "https://i.gifer.com/origin/c4/c4a0cd09467813298c11d008d998c984_w200.gif"
                },
                {
                    "name": "Tired Sleep GIF - Tired Sleep Sleepy GIFs",
                    "src": "https://i.gifer.com/origin/db/dbc507108e651ec235867ca5f6d812fa_w200.gif"
                },
                {
                    "name": "Tired Computer GIF - Tired Computer Anime GIFs",
                    "src": "https://i.gifer.com/origin/e3/e36f74c9fc12b18f86396054214b2902_w200.gif"
                },
                {
                    "name": "Dreaming Tired GIF - Dreaming Tired Sleepy GIFs",
                    "src": "https://i.gifer.com/origin/0f/0f869f3c3f313a63335a4deb4869f32c_w200.gif"
                },
                {
                    "name": "Tired Work GIF - Tired Work The office GIFs",
                    "src": "https://i.gifer.com/origin/85/85957eb23b30f980d89e69d4cdafb52f_w200.gif"
                },
                {
                    "name": "Tired Sleepy GIF - Tired Sleepy Falling asleep GIFs",
                    "src": "https://i.gifer.com/origin/92/92b81735f53a90709e88983b76bded03_w200.gif"
                },
                {
                    "name": "Tired Exhausted GIF - Tired Exhausted Wake up GIFs",
                    "src": "https://i.gifer.com/origin/55/55907d09dba406a010ef54f5d4e38a4c_w200.gif"
                }
            ]
        },
        {
            name: 'Happy',
            gif: [
                {
                    "name": "Happy Jimmy fallon GIF - Happy Jimmy fallon Late night with jimmy fallon GIFs",
                    "src": "https://i.gifer.com/origin/65/651d5042e49e2eea63ea94c09e119716_w200.gif"
                },
                {
                    "name": "Happy Dance GIF - Happy Dance Dancing GIFs",
                    "src": "https://i.gifer.com/origin/ab/ab2cd81153f2128a14b6120f384516d4_w200.gif"
                },
                {
                    "name": "Happy Excited GIF - Happy Excited Fangirling GIFs",
                    "src": "https://i.gifer.com/origin/21/21762ed7310f9816e93856b2ac654258_w200.gif"
                },
                {
                    "name": "Happy Clapping GIF - Happy Clapping Be GIFs",
                    "src": "https://i.gifer.com/origin/f0/f0bdf628922be5398acdffd143c734c1_w200.gif"
                },
                {
                    "name": "Happy Celebrate GIF - Happy Celebrate Yay GIFs",
                    "src": "https://i.gifer.com/origin/fa/fa1ddf545d5b34bce1c5c5bc6162de52_w200.gif"
                },
                {
                    "name": "Funny Happy GIF - Funny Happy Sloth GIFs",
                    "src": "https://i.gifer.com/origin/b8/b842107e63c67d5674d17e0f576274fa_w200.gif"
                },
                {
                    "name": "Happy Excited GIF - Happy Excited Fangirling GIFs",
                    "src": "https://i.gifer.com/origin/a7/a713a0c5c2c77eb97497f60455862718_w200.gif"
                },
                {
                    "name": "Happy The secret life of pets GIF - Happy The secret life of pets Snowball GIFs",
                    "src": "https://i.gifer.com/origin/eb/eb7fb1b4b77f2d3328bd4d54eb94f9ec_w200.gif"
                },
                {
                    "name": "Hd Leonardo dicaprio GIF - Hd Leonardo dicaprio The great gatsby GIFs",
                    "src": "https://i.gifer.com/origin/ed/ed7843c794b34fe4fc95260a9231625a_w200.gif"
                },
                {
                    "name": "Dancing Happy dance GIF - Dancing Happy dance Happiness GIFs",
                    "src": "https://i.gifer.com/origin/21/211e692fce6fa4c8f914e9b0f870c2b1_w200.gif"
                },
                {
                    "name": "Emoji Download GIF - Emoji Download Emojis GIFs",
                    "src": "https://i.gifer.com/origin/a6/a696590f00ea820a27ee38dc77d478d6_w200.gif"
                },
                {
                    "name": "Im so happy Fuller house GIF - Im so happy Fuller house The 1975 GIFs",
                    "src": "https://i.gifer.com/origin/9d/9dc1bcbcea34b5e6f97ceed5f8c39c3f_w200.gif"
                },
                {
                    "name": "Dance Dancing GIF - Dance Dancing Transparent GIFs",
                    "src": "https://i.gifer.com/origin/0f/0fd379b81bc8023064986c9c45f22253_w200.gif"
                },
                {
                    "name": "Transparent Snoop dogg GIF - Transparent Snoop dogg Dancing GIFs",
                    "src": "https://i.gifer.com/origin/c5/c5db38375f8f93e17b30049a63f15c81_w200.gif"
                },
                {
                    "name": "Happy Frozen GIF - Happy Frozen Happy dance GIFs",
                    "src": "https://i.gifer.com/origin/d0/d0e6e89a42c43d31b5913e232d87af7b_w200.gif"
                },
                {
                    "name": "Happy Feelings GIF - Happy Feelings Smiles GIFs",
                    "src": "https://i.gifer.com/origin/c8/c8682715d3d18448ad1a62f9e53f79a4_w200.gif"
                }
            ]
        },
    ]
    const dispatch = useDispatch();
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <GifMui>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons
                allowScrollButtonsMobile
                aria-label="scrollable force tabs example"
            >

                {
                    gifs.map((gif, index) => (
                        <Tab label={gif.name} key={index} />
                    ))
                }
            </Tabs>

            <BoxSearchMui>
                <IconSearchMui />
                <InputSearchMui placeholder="Search for stickers..." />
            </BoxSearchMui>

            <Box sx={{ height: '300px' }}>
                <ImageList sx={{ width: '100%', maxHeight: '300px' }} cols={4} rowHeight={70}>
                    {gifs[value].gif.map((gif) => (
                        <ImageListItem key={gif.src} className="gif-detail" onClick={() => dispatch(MessageActions.SetGif(gif.src))}>
                            <img
                                srcSet={`${gif.src}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                src={`${gif.src}?w=164&h=164&fit=crop&auto=format`}
                                alt={gif.name}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
        </GifMui>
    );
}