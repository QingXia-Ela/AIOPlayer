import { albums as _albums } from "monster-siren-api/dist/api";
import request from "@/utils/request";

export const albums = async () => _albums({ request })
