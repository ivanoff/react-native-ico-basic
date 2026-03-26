declare module 'react-native-ico-basic' {
    import { ReactNode } from 'react';
    import { SvgProps } from 'react-native-svg';

    type AdditionalProps = {
      onError?: (error: Error) => void;
      onLoad?: () => void;
      fallback?: ReactNode;
    };

    type iconNames = 'crop' |
      'message' |
      'low-volume' |
      'name' |
      'diary' |
      'trash' |
      'wristwatch-2' |
      'users' |
      'backwards' |
      'video' |
      'present-1' |
      'forward' |
      'search' |
      'wall-clock' |
      'usb' |
      'recycle-3' |
      'user-13' |
      'backward' |
      'note-1' |
      'bell' |
      'flask-1' |
      'menu' |
      'user-2' |
      'zoom-in' |
      'monitor' |
      'zoom' |
      'compress' |
      'resume' |
      'upload-2' |
      'left-arrow' |
      'eye' |
      'center-align' |
      'box' |
      'flag-1' |
      'eye-1' |
      'mute' |
      'organization' |
      'briefcase' |
      'magnet' |
      'gear-1' |
      'presentation' |
      'brush' |
      'block-user' |
      'gym' |
      'ban' |
      'writing-4' |
      'squares' |
      'tissue-roll' |
      'monitor-1' |
      'user-1' |
      'rulers' |
      'zoom-out' |
      'user-8' |
      'test-tube' |
      'user' |
      'syringe' |
      'tick' |
      'recycle-4' |
      'tick-1' |
      'tubes' |
      'bluetooth' |
      'add' |
      'down-arrow-1' |
      'delete-user' |
      'video-camera' |
      'share' |
      'present' |
      'book-1' |
      'chemistry-1' |
      'thunder' |
      'compress-1' |
      'sand-clock-2' |
      'code-1' |
      'star' |
      'writing-5' |
      'clock' |
      'shopping-cart' |
      'pages' |
      'log-out' |
      'gear' |
      'calendar-1' |
      'play' |
      'user-3' |
      'monitor-2' |
      'left-alignment' |
      'badge' |
      'calendar' |
      'pin' |
      'paper' |
      'down-arrow' |
      'router' |
      'user-5' |
      'bar' |
      'user-7' |
      'refresh' |
      'tie' |
      'anchor' |
      'wristwatch-1' |
      'in' |
      'code' |
      'drink' |
      'blind' |
      'anchor-point' |
      'chronometer' |
      'identification-1' |
      'router-1' |
      'cutlery' |
      'book' |
      'drop' |
      'flag-2' |
      'calendar-2' |
      'contact-book' |
      'pen-1' |
      'out' |
      'attach' |
      'contacs' |
      'diagram' |
      'event' |
      'full-battery-1' |
      'ticket' |
      'stethoscope' |
      'recycle' |
      'slider' |
      'board' |
      'physics' |
      'shopping-bag' |
      'slider-1' |
      'inbox' |
      'top-alignment' |
      'page' |
      'user-11' |
      'wand' |
      'contact-information' |
      'usb-cable' |
      'syringe-1' |
      'ribbon' |
      'note' |
      'identification' |
      'achievement' |
      'user-4' |
      'roller' |
      'chemistry' |
      'writing' |
      'user-15' |
      'archives' |
      'web' |
      'ruler' |
      'calendar-5' |
      'aim' |
      'folder-1' |
      'calendar-3' |
      'flag' |
      'notebook' |
      'tag' |
      'lamp' |
      'set-square' |
      'minimize' |
      'shopping-cart-1' |
      'pen' |
      'user-9' |
      'call' |
      'measurement' |
      'headphones' |
      'calendar-4' |
      'user-6' |
      'cart' |
      'user-17' |
      'writing-6' |
      'right' |
      'image-1' |
      'torch' |
      'tablet' |
      'wristwatch' |
      'street-light' |
      'diamond' |
      'headphones-1' |
      'low-battery' |
      'compass' |
      'center-align-1' |
      'document' |
      'image' |
      'pause' |
      'in-1' |
      'microphone' |
      'more' |
      'writing-1' |
      'recycle-1' |
      'cancel' |
      'right-alignment' |
      'event-1' |
      'telephone' |
      'placeholder-1' |
      'profile' |
      'smartphone' |
      'upload' |
      'trolley' |
      'placeholder' |
      'curriculum' |
      'verified' |
      'edit' |
      'add-user' |
      'profile-1' |
      'writing-2' |
      'placeholder-2' |
      'calendar-6' |
      'letter' |
      'layers' |
      'folder' |
      'mobile' |
      'shield' |
      'sand-clock-1' |
      'user-12' |
      'atm-card' |
      'user-14' |
      'full-battery' |
      'recycle-2' |
      'postal' |
      'flask' |
      'tube' |
      'package' |
      'sand-clock' |
      'bag' |
      'vector' |
      'binocular' |
      'upload-1' |
      'cpu' |
      'pendrive' |
      'approved' |
      'archive' |
      'notepad' |
      'user-16' |
      'writing-3' |
      'bookmark' |
      'up-arrow' |
      'user-10' |
      'forward-1' |
      'mute-1';

    type iconColors = ;

    type backgroundType = 'circle' | 'rect' | 'button';

    type colorsType = Record<iconColors, string>;

    type positionType = 'top' | 'bottom' | 'right' | 'left' |
      'top_right' | 'top_left' | 'bottom_right' | 'bottom_left';

    type backgroundTypeObj = {
      type?: backgroundType;
      color?: string;
      radius?: number;
      borderRadius?: number;
    };

    type badgeTypeObj = {
      value?: number | string;
      fontSize?: string;
      position?: positionType;
      color?: string;
      colors: colorsType;
      backgroundColor?: string;
      radius?: number;
    };

    interface IconProps {
      name: iconNames;
      width?: number;
      height?: number;
      color?: string;
      colors?: colorsType;
      stroke?: number;
      background?: backgroundType | backgroundTypeObj;
      badge?: number | string | badgeTypeObj;
    }

    const Icon: (props: IconProps & SvgProps & AdditionalProps) => ReactNode;

    export { iconNames };
    export default Icon;
}
