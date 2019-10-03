package com.aidandlim.camagru.service;

import com.aidandlim.camagru.dao.CommentDao;
import com.aidandlim.camagru.dao.PostDao;
import com.aidandlim.camagru.dto.Comment;
import com.aidandlim.camagru.dto.Post;
import com.aidandlim.camagru.dto.Token;
import com.aidandlim.camagru.dto.User;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;

@Service
public class CommentService {

    @Autowired
    SqlSession sqlSession;

    @Autowired
    CommentDao commentDao;

    @Autowired
    TokenService tokenService;

    @Transactional
    public ArrayList<Comment> selectAllByPost(Post post) {
        try {
            commentDao = sqlSession.getMapper(CommentDao.class);
            return commentDao.selectAllByPost(post);
        } catch (Exception e) {
            e.printStackTrace();
            return (null);
        }
    }

    @Transactional
    public boolean insert(Comment comment) {
        if(!tokenService.checkToken(new Token(comment.getToken())))
            return false;
        try {
            commentDao = sqlSession.getMapper(CommentDao.class);
            commentDao.insert(comment);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    @Transactional
    public boolean delete(Comment comment) {
        if(!tokenService.checkToken(new Token(comment.getToken())))
            return false;
        try {
            commentDao = sqlSession.getMapper(CommentDao.class);
            commentDao.delete(comment);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

}