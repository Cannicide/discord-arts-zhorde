type PresenceStatus = 'online' | 'idle' | 'offline' | 'dnd' | 'invisible' | 'streaming' | 'phone'
type BorderAlign = 'horizontal' | 'vertical'

interface RankOptions {
    currentXp: number;
    requiredXp: number;
    level: number;
    rank?: number;
    barColor?: string;
}

interface ProfileOptions {
    customTag?: string;
    customBadges?: string[];
    customBackground?: string;
    overwriteBadges?: boolean;
    usernameColor?: string;
    tagColor?: string;
    borderColor?: string | string[];
    borderAlign?: BorderAlign;
    badgesFrame?: boolean;
    removeBadges?: boolean;
    removeBorder?: boolean;
    presenceStatus?: PresenceStatus;
    squareAvatar?: boolean;
    rankData?: RankOptions;
}

interface DiscordCard {
    files: Buffer[];
    buffer(): Buffer;
    reply(interaction: import("discord.js").CommandInteraction|import("discord.js").Message): void;
    followUp(interaction: import("discord.js").CommandInteraction): void;
}

declare module 'discord-arts-zhorde' {
    export function profileImage(userId: string, options?: ProfileOptions): Promise<DiscordCard>;
}
