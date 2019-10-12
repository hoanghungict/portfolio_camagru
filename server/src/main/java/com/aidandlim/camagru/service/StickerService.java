package com.aidandlim.camagru.service;

import org.apache.commons.io.FileUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.File;
import java.util.ArrayList;

@Service
public class StickerService {

    String PATH = "/Users/aidan/Workspace/portfolio_camagru/sticker/";

    public byte[] get(String uuid) {
        try {
            return FileUtils.readFileToByteArray(new File(PATH + uuid));
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @Transactional
    public ArrayList<String> selectAll() {
        try {
            File dir = new File("/Users/aidan/Workspace/portfolio_camagru/sticker/");
            File[] files = dir.listFiles();
            ArrayList<String> dto = new ArrayList<String>();
            for(int i = 0; i < files.length; i++) {
                dto.add(files[i].getName());
            }
            return (dto);
        } catch (Exception e) {
            e.printStackTrace();
            return (null);
        }
    }

}