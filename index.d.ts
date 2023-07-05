type presenceStatus = 'online' | 'idle' | 'offline' | 'dnd' | 'invisible' | 'streaming' | 'phone'
type borderAlign = 'horizontal' | 'vertical'

interface rankOptions {
    currentXp: number;
    requiredXp: number;
    level: number;
    rank?: number;
    barColor?: string;
}

interface profileOptions {
    customTag?: string;
    customBadges?: string[];
    customBackground?: string;
    overwriteBadges?: boolean;
    usernameColor?: string;
    tagColor?: string;
    borderColor?: string | string[];
    borderAlign?: borderAlign;
    badgesFrame?: boolean;
    removeBadges?: boolean;
    removeBorder?: boolean;
    presenceStatus?: presenceStatus;
    squareAvatar?: boolean;
    rankData?: rankOptions;
}

declare module 'discord-arts-zhorde' {
    export function profileImage(user: string, options?: profileOptions): Promise<Buffer>;
}
