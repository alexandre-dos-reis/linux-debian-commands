import type { subCommand } from "./subCommand.type";

export interface command {
    id:           number;
    cmd_order:    number;
    title:        string;
    slug:         string;
    image:        string;
    tab:          string;
    description:  string;
    net:          boolean;
    sub_commands: subCommand[];
}