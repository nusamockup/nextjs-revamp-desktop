/// <reference types="react" />
import { NsUINumberSize } from '@ns-ui/styles';
export interface TransferListItem {
    value: string;
    label: string;
    group?: string;
    [key: string]: any;
}
export type TransferListData = [TransferListItem[], TransferListItem[]];
export interface TransferListItemComponentProps {
    data: TransferListItem;
    selected: boolean;
    radius: NsUINumberSize;
}
export type TransferListItemComponent = React.FC<TransferListItemComponentProps>;
//# sourceMappingURL=types.d.ts.map