var style = document.createElement('style');
        style.innerHTML = `
        .hidden{
            opacity: .4;
          }
          .hidden > span{
            width: 150px;
            text-align: left !important;
          }
          .hidden *:not(#ip_info *,.windowCloseButton,#BOJS-BOX, .wincontainer,span,#closeButton){
            display: none !important;
          }

        #botsTab {
            max-height: 182px !important;
        }

        #player-list button {
            height: 20px !important;
        }

        #assetsid {
            max-width: 305.15px !important;
            max-height: 50px !important;
            overflow-y: scroll !important;
            display: flex !important;
            flex-wrap: wrap !important;
            transition: .2s !important;
            justify-content: center !important;
        }

        #assetsid:hover {
            max-height: 200px !important;
        }

        .copyUser,
                  copypref {
            text-shadow: 1px 1px #421754 !important;
            color: #e4951a !important;
        }

        copyuseful {
            font-size: 0px;
            text-shadow: 1px 1px #421754 !important;
            color: #e4951a !important;
            transition: .2s !important;
            cursor: pointer !important;
        }

        li:hover copyuseful {
            display: unset !important;
            font-size: 13px !important;
        }

        #assetsid > img {
            width: 75px !important;
            height: 75px !important;
        }

        #assetsid > button {
            position: absolute !important;
            left: 0 !important;
            top: 0 !important;
        }

        [id*="NewChat-Tab-"] {
            opacity: 0.9;
            transition: .2s;
            background-color: #0009 !important;
        }

        #ciifcakemmcbbdpmljdohdmbodagmela-img,
              #patterpaste::-webkit-scrollbar {
            display: none !important;
        }

        *::-webkit-scrollbar {
            display: none !important;
        }

        #player-list.winframe > * {
            background: #7e635c;
        }

        #player-list.winframe {
            position: absolute !important;
            top: calc(100% + 15px) !important;
            left: -11px !important;
        }

        #BOJS-BOX > .wincontainer button,
        .copy-tools > button {
            border-image: url(https://raw.githubusercontent.com/NoT0BoT/MooMoo.io-MooMod/master/button.png) 6 repeat !important;
            background-color: #151515 !important;
        }

        #BOJS-BOX > .wincontainer button:active,
        .copy-tools > button:active {
            border-image: url(https://raw.githubusercontent.com/NoT0BoT/MooMoo.io-MooMod/master/button_pressed.png) 6 repeat !important;
        }

        #BOJS-BOX > .wincontainer,
        .copy-tools {
            border-image: url(https://raw.githubusercontent.com/NoT0BoT/MooMoo.io-MooMod/master/window_in.png) 5 repeat !important;
            background-color: #3d3d3d !important;
        }

        #BOJS-BOX > .wincontainer *,
        .copy-tools *,
        .BOJS-BOX span,
        #copy-tools span {
            text-shadow: 1px 1px #421754 !important;
            color: #e4951a !important;
        }

        .BOJS-BOX,
        #copy-tools {
            border-image: url(https://raw.githubusercontent.com/NoT0BoT/MooMoo.io-MooMod/master/window_out.png) 11 repeat !important;
            border-image-outset: 4px !important;
            background-color: #151515 !important;
        }

        div[id*="NewChat-Tab-Public"] {
            background-color: #00000099 !important;
        }

        #BOJS-BOX {
            display: flex;
        }

        button {
            border-color: #1b1c1f !important;
            border-width: 3px !important;
        }

        #uip {
            width: max-content !important;
        }

        .square {
            height: 15px;
            width: 15px;
        }

        .copytip {
            top: unset;
            left: unset;
            display: none;
            margin: 20px;
            transition: .2s;
        }

        #player-list.IP_INFO > * > * > * > * {
            width: 0px !important;
        }

        #player-list.IP_INFO > * {
            text-align: left !important;
        }

        #curList {
            width: 20px !important;
            height: 20px !important;
            background-size: 25px !important;
            background-repeat: no-repeat !important;
            background-position: center !important;
        }

        button>* {
            position: absolute !important;
            top: 0 !important;
            margin: auto 0 !important;
        }

        ::-webkit-scrollbar {
            display: none !important !important;
        }

        #chat {
            left: 10px !important;
            bottom: 10px !important;
        }

        #patterpaste::-webkit-scrollbar {
            display: none !important;
        }

        #palette-bg,
                    #arc-widget-container>*>* {
            display: none !important;
        }

        #copybotcont {
            background-size: 100% !important;
        }

        #palette {
            right: -30px !important;
            transform: translateY(0) !important;
        }

        #chat-messages > li {
            white-space: normal !important;
        }`;
        document.head.appendChild(style);
