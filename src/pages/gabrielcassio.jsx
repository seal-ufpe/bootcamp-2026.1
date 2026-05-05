import { useState, useEffect } from "react";

const layoutCardStyles ={
    backCard:{
        width:'512px',
        height: '196px',    
        position: 'relative',
        backgroundColor: '#FEFAEF',
        border: '1px solid #000000',
        overflow: 'hidden'
    },
    frontCard:{
        position: 'absolute',
        top: '12px',
        left: '12px',
        right: '12px',
        bottom: '12px',
        boxSizing: 'border-box',
        backgroundColor: 'transparent',
        border: '2px solid #0E1C41',
        borderRadius: '5px',
        overflow: 'hidden',
        zIndex: 1
    },
    assetsContainer:{
        width: '100%',
        height: '100%',
        position: 'absolute',
        right: '0px',
        bottom: '0px',
        pointerEvents: 'none',
        zIndex: 2
    },
    contentContainer:{
        width: '50%',
        height: '100%',
        margin: '2px 2px 2px 15px',
    }, 
    text:{
        fontSize: '12px',
        fontFamily: "Arial",
        lineHeight: '12px',
        textAlign: 'justify'
    }
};

// Svg assets
const SunMain = ({darkMode})  => {
    const currentColor = darkMode ? "#4A4E69" : "#FE9590";

    return(
        <div style={{display: 'flex', position: 'absolute', right: '82px', top: '28px'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="140" height="140" viewBox="0 0 140 140" fill="none">
                <circle cx="70" cy="70" r="70" fill={currentColor}/>
            </svg>
        </div>
    );
};
const Sun = ({darkMode}) =>{
    const color = darkMode ? "#F2E3C6" : "#2B2C4A";
    return(
        <div style={{display: 'flex', position: 'absolute', right: '25px', top: '30px'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M13.5 9C13.5 10.1935 13.0259 11.3381 12.182 12.182C11.3381 13.0259 10.1935 13.5 9 13.5C7.80653 13.5 6.66193 13.0259 5.81802 12.182C4.97411 11.3381 4.5 10.1935 4.5 9C4.5 7.80653 4.97411 6.66193 5.81802 5.81802C6.66193 4.97411 7.80653 4.5 9 4.5C10.1935 4.5 11.3381 4.97411 12.182 5.81802C13.0259 6.66193 13.5 7.80653 13.5 9Z" fill={color}/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9 0.9375C9.14918 0.9375 9.29226 0.996763 9.39775 1.10225C9.50324 1.20774 9.5625 1.35082 9.5625 1.5V2.25C9.5625 2.39918 9.50324 2.54226 9.39775 2.64775C9.29226 2.75324 9.14918 2.8125 9 2.8125C8.85082 2.8125 8.70774 2.75324 8.60225 2.64775C8.49676 2.54226 8.4375 2.39918 8.4375 2.25V1.5C8.4375 1.35082 8.49676 1.20774 8.60225 1.10225C8.70774 0.996763 8.85082 0.9375 9 0.9375ZM3.29925 3.29925C3.40472 3.19391 3.54769 3.13474 3.69675 3.13474C3.84581 3.13474 3.98878 3.19391 4.09425 3.29925L4.389 3.59325C4.49152 3.69929 4.54828 3.84135 4.54707 3.98884C4.54586 4.13633 4.48677 4.27744 4.38252 4.38178C4.27828 4.48612 4.13722 4.54534 3.98974 4.5467C3.84225 4.54805 3.70014 4.49142 3.594 4.389L3.29925 4.09425C3.19391 3.98878 3.13474 3.84581 3.13474 3.69675C3.13474 3.54769 3.19391 3.40472 3.29925 3.29925ZM14.7008 3.29925C14.8061 3.40472 14.8653 3.54769 14.8653 3.69675C14.8653 3.84581 14.8061 3.98878 14.7008 4.09425L14.406 4.389C14.2994 4.48836 14.1583 4.54245 14.0126 4.53988C13.8669 4.53731 13.7278 4.47828 13.6248 4.37522C13.5217 4.27216 13.4627 4.13312 13.4601 3.98739C13.4575 3.84167 13.5116 3.70063 13.611 3.594L13.9058 3.29925C14.0112 3.19391 14.1542 3.13474 14.3032 3.13474C14.4523 3.13474 14.5953 3.19391 14.7008 3.29925ZM0.9375 9C0.9375 8.85082 0.996763 8.70774 1.10225 8.60225C1.20774 8.49676 1.35082 8.4375 1.5 8.4375H2.25C2.39918 8.4375 2.54226 8.49676 2.64775 8.60225C2.75324 8.70774 2.8125 8.85082 2.8125 9C2.8125 9.14918 2.75324 9.29226 2.64775 9.39775C2.54226 9.50324 2.39918 9.5625 2.25 9.5625H1.5C1.35082 9.5625 1.20774 9.50324 1.10225 9.39775C0.996763 9.29226 0.9375 9.14918 0.9375 9ZM15.1875 9C15.1875 8.85082 15.2468 8.70774 15.3523 8.60225C15.4577 8.49676 15.6008 8.4375 15.75 8.4375H16.5C16.6492 8.4375 16.7923 8.49676 16.8977 8.60225C17.0032 8.70774 17.0625 8.85082 17.0625 9C17.0625 9.14918 17.0032 9.29226 16.8977 9.39775C16.7923 9.50324 16.6492 9.5625 16.5 9.5625H15.75C15.6008 9.5625 15.4577 9.50324 15.3523 9.39775C15.2468 9.29226 15.1875 9.14918 15.1875 9ZM13.611 13.611C13.7165 13.5057 13.8594 13.4465 14.0085 13.4465C14.1576 13.4465 14.3005 13.5057 14.406 13.611L14.7008 13.9058C14.756 13.9572 14.8003 14.0193 14.8311 14.0883C14.8618 14.1573 14.8784 14.2318 14.8797 14.3074C14.881 14.3829 14.8671 14.4579 14.8388 14.5279C14.8106 14.598 14.7684 14.6616 14.715 14.715C14.6616 14.7684 14.598 14.8106 14.5279 14.8388C14.4579 14.8671 14.3829 14.881 14.3074 14.8797C14.2318 14.8784 14.1573 14.8618 14.0883 14.8311C14.0193 14.8003 13.9572 14.756 13.9058 14.7008L13.611 14.406C13.5057 14.3005 13.4465 14.1576 13.4465 14.0085C13.4465 13.8594 13.5057 13.7165 13.611 13.611ZM4.389 13.611C4.49434 13.7165 4.55351 13.8594 4.5535 14.0085C4.5535 14.1576 4.49434 14.3005 4.389 14.406L4.09425 14.7008C4.04275 14.756 3.98065 14.8003 3.91165 14.8311C3.84265 14.8618 3.76817 14.8784 3.69264 14.8797C3.61711 14.881 3.54209 14.8671 3.47205 14.8388C3.40201 14.8106 3.33839 14.7684 3.28497 14.715C3.23156 14.6616 3.18945 14.598 3.16116 14.5279C3.13287 14.4579 3.11897 14.3829 3.12031 14.3074C3.12164 14.2318 3.13817 14.1573 3.16891 14.0883C3.19966 14.0193 3.24398 13.9572 3.29925 13.9058L3.59325 13.611C3.64549 13.5587 3.70751 13.5173 3.77578 13.489C3.84405 13.4607 3.91723 13.4461 3.99112 13.4461C4.06502 13.4461 4.1382 13.4607 4.20647 13.489C4.27474 13.5173 4.33676 13.5587 4.389 13.611ZM9 15.1875C9.14918 15.1875 9.29226 15.2468 9.39775 15.3523C9.50324 15.4577 9.5625 15.6008 9.5625 15.75V16.5C9.5625 16.6492 9.50324 16.7923 9.39775 16.8977C9.29226 17.0032 9.14918 17.0625 9 17.0625C8.85082 17.0625 8.70774 17.0032 8.60225 16.8977C8.49676 16.7923 8.4375 16.6492 8.4375 16.5V15.75C8.4375 15.6008 8.49676 15.4577 8.60225 15.3523C8.70774 15.2468 8.85082 15.1875 9 15.1875Z" fill={color}/>
            </svg>
        </div>
    );
};
const Tower = ({darkMode}) =>{
    const currColorLightPink = darkMode ? "#4A4E69" : "#FBBCBF";
    const currColorDarkNavy = darkMode ? "#1A1B26" : "#0E1C41";
    return(
        <div style={{display: 'flex', position: 'absolute', right: '25%', bottom: '0px'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="151" viewBox="0 0 43 151" fill="none">
                <g clip-path="url(#clip0_17_5)">
                <rect x="5.94403" y="47.5997" width="31" height="104.461" fill={currColorLightPink}/>
                <rect width="26.1352" height="104.874" transform="matrix(0.99944 -0.0334479 0.036414 0.999337 10.944 48.4739)" fill={currColorLightPink}/>
                <rect width="26.1336" height="104.881" transform="matrix(-0.998741 -0.0501622 -0.0546034 0.998508 31.8276 48.7322)" fill={currColorLightPink}/>
                <rect x="11.944" y="48" width="25" height="104" fill={currColorDarkNavy}/>
                <rect width="14.9171" height="104.881" transform="matrix(0.998741 -0.0501622 0.0546034 0.998508 22.2067 48.2633)" fill={currColorDarkNavy}/>
                <path d="M5.94403 24H36.944V48H5.94403V24Z" fill={currColorLightPink}/>
                <path d="M16.944 24H36.944V48H16.944V24Z" fill={currColorDarkNavy}/>
                <rect x="0.944031" y="22" width="41" height="2" fill={currColorDarkNavy}/>
                <rect x="0.944031" y="44" width="41" height="4" fill={currColorDarkNavy}/>
                <rect x="18.944" y="7" width="4" height="2" fill={currColorLightPink}/>
                <path d="M21.6345 8C29.4707 8 36.2256 13.7326 39.3249 22H3.94403C7.04335 13.7326 13.7983 8 21.6345 8Z" fill={currColorLightPink}/>
                <path d="M24.1345 9C30.8632 9.00008 36.6637 14.3231 39.3249 22H8.94403C11.6053 14.3232 17.4057 9.00007 24.1345 9Z" fill={currColorDarkNavy}/>
                <path d="M20.944 0L21.8101 5.25H20.078L20.944 0Z" fill={currColorLightPink}/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.9431 5C22.2724 5.00028 23.4172 5.81941 23.9431 7H17.9411C18.4672 5.81912 19.6134 5 20.9431 5Z" fill={currColorDarkNavy}/>
                <path d="M10.944 29C10.0581 29.0001 9.29618 29.4103 8.94501 30H12.944C12.5929 29.4101 11.8302 29 10.944 29Z" fill={currColorDarkNavy}/>
                <rect x="8.94403" y="30" width="4" height="8" fill={currColorDarkNavy}/>
                <rect x="6.94403" y="117" width="5" height="10" fill={currColorDarkNavy}/>
                <path d="M9.44403 114C8.33571 114 7.38254 115.229 6.94403 117H11.944C11.5055 115.229 10.5525 114 9.44403 114Z" fill={currColorDarkNavy}/>
                </g>
                <defs>
                <clipPath id="clip0_17_5">
                <rect width="43" height="152" fill="white"/>
                </clipPath>
                </defs>
            </svg>
        </div>
    )
};
const Waves = ({darkMode}) => {
    const currColorBackWave = darkMode ? "#1A1B26" : "#3F4261";
    const currColorFrontWave = darkMode ? "#0F0F14" : "#2B2C4A";
    return(
        <div style={{display: 'flex', position: 'absolute', bottom: '0px', right: '0px'}}>
           <svg xmlns="http://www.w3.org/2000/svg" width="336" height="84" viewBox="0 0 336 84" fill="none">
                <path d="M84.5 31.2558C81.5 34.6744 61 49.3256 0 84H335.5V0C328.5 2.27907 315 4.39535 302 5.37209C286.538 6.53385 240 15.6279 214.5 20.5116C189 25.3953 172 32.7209 155 31.2558C141.4 30.0837 128.5 24.907 118.5 20.0233L111 18.5581L102 20.5116L95 23.9302L89 27.8372L84.5 31.2558Z" fill={currColorBackWave}/>
                <path d="M335.5 42.4884C328.5 44.7674 322.192 48.8506 309.5 51.7674C301 53.7209 267 56.6512 254.5 57.6279C246.486 59.5374 237.163 57.699 226.5 58.6047C215 59.5814 213 60.0698 200.5 61.0465C188 62.0233 185 62.5116 174 62.5116C170.438 62.5116 160.363 62.5839 154.5 62.5116C148.905 62.4426 139.713 59.495 133.5 57.6279C128 55.975 131.5 57.1395 126 54.2093L120 50.7907L113 48.3488L107 46.8837L100.5 45.907L94 46.8837L85.5 48.8372L78.5 51.7674L68.25 57.1395L58 62.5116L47.5 67.3953L35 71.7907L22.5 76.186L1 84H335.5V42.4884Z" fill={currColorFrontWave}/>
            </svg>
        </div>
    );
};

const assetList = [SunMain, Sun, Waves, Tower];

// Let's go to work only inline styles
// Core
const Image = ({src, alt, isIcon}) => {
    const imageContainer ={
        
    };
    const iconImage ={
        width: '16px',
        height: '16px',
    };
    const profileImage = {
        width: '100px',
        height: '100px',
        position: 'absolute',
        bottom: '0',
        left: '15%',
        objectFit: 'cover',
        borderRadius: '100% 100% 0 0',
        zIndex: 1
    };

    const imageProps = isIcon === true ? iconImage : profileImage;

    return(
        <div style={{...imageContainer}}>
            <img src={src} alt={alt} style={{...imageProps}}></img>
        </div>
    );
};

const Button = ({icon, alt, url, actionFunc}) => {

    const container = {
        width: 'fit-content',
        flexShrink: 0,
        border: 'none',  
        appearance: 'none',  
        outline: 'none',

    }
    const propsButton ={
        width: 'fit-content',
        margin: '0px',
        padding: '0px',
        border: '0px',
        backgroundColor: 'transparent',
        cursor: 'pointer', 
    }

    if (url !== '') {
        return(
            <div style={{...container}}>
                <a href={url} target="_blank" rel="noopener noreferrer">
                    <Image src={icon} alt={alt} isIcon={true}/>
                </a>
            </div>
        );
    }

    return (
        <div style={{...container}}>
            <button style={{...propsButton}} onClick={actionFunc}>
                <Image src={icon} alt={alt} isIcon={true}/>
            </button>
        </div>
    )
};

// Infos to Profile Cards
const cardButtons = [
    {
        src: 'https://cdn-icons-png.flaticon.com/512/174/174857.png', 
        alt: 'Linkedin', 
        url: 'https://www.linkedin.com/in/gabrielcássio/'
    },
    {
        src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', 
        alt: 'GitHub',
        url:'https://github.com/GabrielCassio'
    },
    {
        src: 'https://cdn-icons-png.flaticon.com/512/495/495625.png', 
        alt: 'ChangeImage',
        url: ''
    }
];

const cardInfos = {
    signature: "Gabriel Cássio",
    biografy: "Estudante do 2º período em Sistemas de Informação e Membro da Liga Acadêmica de Engenharia de Software (Seal- Cin UFPE)",
    images: "https://media.licdn.com/dms/image/v2/D4D03AQFJ2rX0y49T7w/profile-displayphoto-scale_400_400/B4DZk7iHutGQAg-/0/1757640430646?e=1774483200&v=beta&t=LBWNybRMzyVcWIw8bb9O-AEU6OdLvFg5e0IKxb3ylTU"
};

// Profile Card
 const ProfileCard = ({name = cardInfos.signature , bio = cardInfos.biografy}) => {

    const [changeTheme, setChange] = useState(() => {
        const temaGuardado = localStorage.getItem('choosed-theme');
        return temaGuardado === 'dark'; 
    });
   

    // Apply effect to keep the theme
    useEffect (() => {
        if (changeTheme) {
            localStorage.setItem('choosed-theme', 'dark');
        } 
        else {
            localStorage.setItem('choosed-theme', 'light');
        }
    }, [changeTheme]);
    
    return(
        <div style = {{...layoutCardStyles.backCard}}>
            <div style={{...layoutCardStyles.assetsContainer}}>
                {assetList.map((Comp, index) => <Comp key={index} darkMode={changeTheme}/>)}
                <Image src={cardInfos.images} alt={'Perfil'} style={{...layoutCardStyles.image}}></Image>
            </div>
            <div style={{...layoutCardStyles.frontCard}}> 
                <div style={{...layoutCardStyles.contentContainer}}>
                    <div style={{...layoutCardStyles.text}}>
                        <p style={{fontWeight: 'semibold'}}>{name}</p>
                        <p>{bio}</p>
                    </div>
                    <div style = {{display: 'flex', flexDirection: 'column', alignItems: 'left', justifyContent: 'left'}}>
                        {cardButtons.map((btn, id) => <Button key={id} icon={btn.src} alt={btn.alt} url={btn.url} actionFunc={() => setChange(!changeTheme)}/>)}
                    </div>           
                </div>
            </div>
        </div>
    );
 };

export default ProfileCard;
