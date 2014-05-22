imageHelpers = {
  images: function() {
    return ImageInstances.find({
      object_id: this._id
    });
  }
}
