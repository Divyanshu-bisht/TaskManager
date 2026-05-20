const Task = require("../models/Task");

const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ user: req.user.id });

        res.status(200).json({
            success: true,
            tasks,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

const createTask = async (req, res) => {
    try {
        const task = await Task.create({
            title: req.body.title,
            user: req.user.id,
        });

        res.status(201).json({
            success: true,
            task,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

const updateTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);

        if (!task) {
            return res.status(404).json({
                success: false,
                message: "Task not found",
            });
        }

        if (task.user.toString() !== req.user.id) {
            return res.status(403).json({
                success: false,
                message: "Access denied",
            });
        }

        task.title = req.body.title || task.title;
        task.completed = req.body.completed ?? task.completed;

        await task.save();

        res.status(200).json({
            success: true,
            task,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

const deleteTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);

        if (!task) {
            return res.status(404).json({
                success: false,
                message: "Task not found",
            });
        }

        if (
            task.user.toString() !== req.user.id &&
            req.user.role !== "admin"
        ) {
            return res.status(403).json({
                success: false,
                message: "Access denied",
            });
        }

        await task.deleteOne();

        res.status(200).json({
            success: true,
            message: "Task deleted",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
    getTasks,
    createTask,
    updateTask,
    deleteTask,
};