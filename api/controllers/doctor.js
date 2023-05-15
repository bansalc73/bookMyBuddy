import appointMentSchema from "../models/DoctorAppointMent.js";
import OurServices from "../models/PatientsServices.js";
import reviewSchema from "../models/ReviewsModal.js";
import Users from "../models/Users.js";


export const appointMentByDate = async (req, res, next) => {
    // console.log("hola")
    // console.log(req.body)
    const { _id, isAdmin, isDoctor } = req.body.userdata;
    try {
        // console.log(_id)
        if(isDoctor){
            // console.log("Doctor")
            const appointmentDate = await appointMentSchema.find({isDoctor:_id, doctor_id: _id});
            // console.log(appointmentDate);
            res.status(200).json(appointmentDate);
        }
        else if (isAdmin) {
            // console.log("Admin")
            const selectedDate = new Date(req.body.userdata.date).toString();
            // console.log(selectedDate);            
            const nextDate = new Date(req.body.userdata.date)
            nextDate.setDate(new Date(req.body.userdata.date).getDate() + 1)
            const nextDay = new Date(nextDate).toString();
            // console.log(nextDay)            
            const appointmentDate = await appointMentSchema.find({
              appointmantDate: {
                $gte: selectedDate.toString(),
                $lt: nextDay,
              },
            });
            res.status(200).json(appointmentDate);
            
            // console.log(appointmentDate);
            // const appointmentDate = await appointMentSchema.find({ appointmantDate: req.body.userdata.date })
        } else {
            // console.log("Inside")
            const selectedDate = new Date(req.body.userdata.date).toString();
            // const selectedDateWithoutTime = new Date(selectedDate);
            // console.log(selectedDate);            
            const nextDate = new Date(req.body.userdata.date)
            nextDate.setDate(new Date(req.body.userdata.date).getDate() + 1)
            const nextDay = new Date(nextDate).toString();
            // console.log(nextDay)            
            const appointmentDate = await appointMentSchema.find({
              appointmantDate: {
                $gte: selectedDate.toString(),
                $lt: nextDay,
              },
            });
            res.status(200).json(appointmentDate);
            // console.log(appointmentDate);
            // console.log("outside")
        }
    } catch (err) {
        next(err);
    }
}
export const AddServices = async (req, res, next) => {
    const serviceData = new OurServices(req.body);
    try {
        const services = await serviceData.save();
        res.status(200).json(services);
    } catch (err) {
        next(err);
    }
}
export const ServicesList = async (req, res, next) => {
    try {
        const services = await OurServices.find();
        res.status(200).json(services);
    } catch (err) {
        next(err)
    }
}

export const DoctorList = async (req, res, next) => {
    // console.log("Backend doctor")
    // console.log(req.query)
    const { email } = req.query;
    // console.log(email)
    try {
        if (email) {
            const doctorList = await Users.find({ email: email })
            res.status(200).json(doctorList);
        } else {
            const doctorList = await Users.find({ isDoctor: true })
            res.status(200).json(doctorList);
        }
    }
    catch (err) {
        next(err);
    }
}
export const UpdateUserInfo = async (req, res, next) => {
    try {
        const response = await Users.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(response)
    } catch (err) {
        next(err)
    }
}

export const AddAppointMentCollection = async (req, res, next) => {
    // console.log("collection")
    // console.log(req.body)
    const saveAppoint = new appointMentSchema(req.body)
    try {
        const addpointment = await saveAppoint.save();
        res.status(200).json(addpointment)
    }
    catch (err) {
        next(err);
    }
}

//Appopintment PatientList
export const AppointmentPatientsList = async (req, res, next) => {
    // console.log("Patieny List")
    // console.log(req.body)
    const { id, isAdmin, isDoctor } = req.user;
    // console.log(id);
    // console.log(isAdmin);
    // console.log(isDoctor);
    try {
        if(isDoctor){
            const patientList = await appointMentSchema.find({doctor_id:id});
            res.status(200).json(patientList);
        }
        else if(isAdmin) {
            const appointmentPatients = await appointMentSchema.find({});
            res.status(200).json(appointmentPatients);
        } 
        else {
            const appointmentPatients = await appointMentSchema.find({ user_id: id });
            res.status(200).json(appointmentPatients);
        }
    }
    catch (err) {
        next(err);
    }
}

export const IsDoctor = async (req, res, next) => {
    const docEmail = req.body.email;
    try {
        const isDoc = await Users.findOne({ email: docEmail })
        if (isDoc.isDoctor = true) {
            const { password, ...others } = isDoc._doc;
            res.status(200).json({ ...others })
        }
        else {
            res.status(200).json(false)
        }
    }
    catch (err) {
        next(err);
    }
}

//Reviews

export const AddReview = async (req, res, next) => {
    const savedData = new reviewSchema(req.body);
    try {
        const saveReview = await savedData.save();
        res.status(200).json(saveReview);
    } catch (err) {
        next(err)
    }
}
export const ReviewsList = async (req, res, next) => {
    try {
        const response = await reviewSchema.find({});
        res.status(200).json(response)
    }
    catch (err) {
        next(err)
    }
}