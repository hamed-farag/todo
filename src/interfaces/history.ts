export default interface HistoryItemInterface {
  id: number;
  userId: string;
  data?: any;
  createAt: string;
  method?: string;
  url?: string;
}
