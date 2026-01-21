import Device from "../models/Device.js";

// @desc    Ambil status Pompa
// @route   GET /api/devices/pump
export const getPumpStatus = async (req, res) => {
    try{
        // cari device bernama 'Pompa Air', jika tidak ada maka bisa buat saja langsung
        let pump = await Device.findOne({name: 'Pompa Air'});

        if(!pump){
            pump = await Device.create({name: 'Pompa Air', status: 'OFF'})
        }

        res.json(pump)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

// @desc    Ubah status Pompa (ON/OFF)
// @route   POST /api/devices/pump/toggle
export const togglePump = async (req, res) => {
    try {
        //get status sekarang
        let pump = await Device.findOne({name: 'Pompa Air'})
        if (!pump) {
            pump = await Device.create({name: 'Pompa Air', status: 'OFF'})
        }

        // lalu kita balikkan statusnya ( jikalau itu off maka jadi on dan sebaliknya)
        pump.status = pump.status === 'ON' ? 'OFF' : 'ON' 
        pump.lastUpdate = Date.now()
        
        await pump.save()
        res.json({message: `Pompa berhasil di-${pump.status}`, data: pump})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
