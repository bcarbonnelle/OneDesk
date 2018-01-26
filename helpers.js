

exports.registerHelpers = (hbs)=>{
    hbs.registerHelper('staticMap',([lng,lat])=>`https://maps.googleapis.com/maps/api/staticmap?maptype=satellite&center=${lng},${lat}&zoom=14&size=800x200&key=${process.env.API_KEY}&markers=${lng},${lat}&scale=2`)
}