import {bmi} from "../services/bmi.service.js";
import Patient from "../storage/dashboard.storage.js";
import mongoose from "mongoose";

export const handleDashboardData = async (req, res, next) => {
  try {
    const body = req.body;
    console.log(body);
    const data = await Patient.create(body);
    res.send("nice");
    // return res.send("nice");
  } catch (error) {
    next(error);
  }
};

export const handlePatientData = (req, res) => {
  res.render("dashboard.view.ejs");
};

export const calcBMI = (req, res, next) => {
  try {
    bmi();
    return res.send("bmi calculated");
  } catch (error) {
    next(error);
  }
};
